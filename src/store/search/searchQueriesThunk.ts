import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    writeBatch,
    Timestamp,
} from "firebase/firestore";

import { db } from "@/services/firebase";
import { SearchQuery } from "@/types/general";

export const addSearchQuery = createAsyncThunk(
    "searchQueries/addSearchQuery",
    async ({ userId, query }: { userId: string; query: string }) => {
        const userDocRef = doc(db, "users", userId);
        const searchQueriesCollection = collection(userDocRef, "searchQueries");
        const timestamp = Timestamp.fromDate(new Date());
        const docRef = await addDoc(searchQueriesCollection, {
            query,
            timestamp,
        });
        return { id: docRef.id, query, timestamp };
    },
);

export const fetchUserSearchQueries = createAsyncThunk(
    "searchQueries/fetchUserSearchQueries",
    async (userId: string) => {
        const userDocRef = doc(db, "users", userId);
        const searchQueriesCollection = collection(userDocRef, "searchQueries");
        const querySnapshot = await getDocs(searchQueriesCollection);
        const searchQueries: SearchQuery[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            query: doc.data().query,
            timestamp: doc.data().timestamp,
        }));
        return searchQueries;
    },
);

export const deleteSearchQuery = createAsyncThunk(
    "searchQueries/deleteSearchQuery",
    async ({ userId, queryId }: { userId: string; queryId: string }) => {
        const queryDocRef = doc(db, "users", userId, "searchQueries", queryId);
        await deleteDoc(queryDocRef);
        return queryId;
    },
);

export const deleteAllSearchQueries = createAsyncThunk(
    "searchQueries/deleteAllSearchQueries",
    async (userId: string) => {
        const searchQueriesCollection = collection(db, "users", userId, "searchQueries");
        const querySnapshot = await getDocs(searchQueriesCollection);
        const batch = writeBatch(db);
        querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        await batch.commit();
        return userId;
    },
);
