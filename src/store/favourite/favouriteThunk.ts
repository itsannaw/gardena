// src/store/thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, query, where, writeBatch } from "firebase/firestore";

import { db } from "@/services/firebase";
import { Favourite } from "@/types/general";

export const addFavourite = createAsyncThunk(
    "favourites/addFavourite",
    async ({ userId, cardId }: { userId: string; cardId: string }) => {
        const userDocRef = doc(db, "users", userId);
        const favouriteCollection = collection(userDocRef, "favourite");
        const docRef = await addDoc(favouriteCollection, {
            cardId,
        });
        return { id: docRef.id, cardId };
    },
);

export const fetchUserFavourite = createAsyncThunk(
    "favourite/fetchUserFavourite",
    async (userId: string) => {
        const userDocRef = doc(db, "users", userId);
        const favouriteCollection = collection(userDocRef, "favourite");
        const querySnapshot = await getDocs(favouriteCollection);
        const favourite: Favourite[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            cardId: doc.data().cardId,
        }));
        return favourite;
    },
);

export const deleteFavourite = createAsyncThunk(
    "favourite/deleteFavourite",
    async ({ userId, cardId }: { userId: string; cardId: string }) => {
        const userDocRef = doc(db, "users", userId);
        const favouriteCollection = collection(userDocRef, "favourite");
        const favouriteDocsQuery = query(favouriteCollection, where("cardId", "==", cardId));
        const favouriteDocsSnapshot = await getDocs(favouriteDocsQuery);
        const batch = writeBatch(db);

        favouriteDocsSnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });

        await batch.commit();

        return cardId;
    },
);

export const deleteAllFavourite = createAsyncThunk(
    "favourite/deleteAllFavourite",
    async (userId: string) => {
        const favouriteCollection = collection(db, "users", userId, "favourite");
        const querySnapshot = await getDocs(favouriteCollection);
        const batch = writeBatch(db);
        querySnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        await batch.commit();
        return userId;
    },
);
