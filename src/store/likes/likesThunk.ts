import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { db } from "@/services/firebase";

interface LikesState {
    likedCards: {
        [cardId: string]: boolean;
    };
}

export const fetchLikeStatus = createAsyncThunk(
    "likes/fetchLikeStatus",
    async ({ userId, cardId }: { userId: string; cardId: string }) => {
        const docRef = doc(db, "users", userId, "likes", cardId);
        const docSnap = await getDoc(docRef);
        return { cardId, liked: docSnap.exists() ? docSnap.data().liked : false };
    },
);

export const toggleLike = createAsyncThunk(
    "likes/toggleLike",
    async (
        { userId, cardId }: { userId: string; cardId: string },
        { getState },
    ) => {
        const state = getState() as { likes: LikesState };
        const liked = state.likes.likedCards[cardId];

        const docRef = doc(db, "users", userId, "likes", cardId);
        if (liked) {
            await deleteDoc(docRef);
        } else {
            await setDoc(docRef, { liked: true });
        }

        return { cardId, liked: !liked };
    },
);

export const fetchAllLikes = createAsyncThunk("likes/fetchAllLikes", async (userId: string) => {
    const likesCollection = collection(db, "users", userId, "likes");
    const querySnapshot = await getDocs(likesCollection);
    const likes = querySnapshot.docs.map((doc) => ({
        cardId: doc.id,
        liked: doc.data().liked,
    }));
    return likes;
});
