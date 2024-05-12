import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { auth } from "@/services/firebase";
import { removeUser, setUser } from "@/store/user/userSlice";

export const useIsLoggedIn = () => {
    const dispatch = useAppDispatch();
    const email = useAppSelector((state) => state.userSlice.email);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                dispatch(
                    setUser({
                        id: user.uid,
                        email: user.email,
                    }),
                );
            } else {
                dispatch(removeUser());
            }
            setLoading(false);
        });

        return () => user();
    }, [dispatch]);

    return {
        isLoggedIn: !!email,
        loading,
    };
};
