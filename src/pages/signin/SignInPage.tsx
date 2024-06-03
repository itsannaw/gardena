import { Suspense, lazy } from "react";

import { LinearLoading } from "@/components";

const SignIn = lazy(() => import("@/components/auth/SignIn"));

export const SignInPage = () => {
    return (
        <Suspense
            fallback={
                <div className="flex h-screen items-center justify-center">
                    <LinearLoading />
                </div>
            }
        >
            <SignIn />
        </Suspense>
    );
};
