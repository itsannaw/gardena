import { Suspense, lazy } from "react";

import { LinearLoading } from "@/components";

const SignIn = lazy(() => import("@/components/auth/SignIn"));

export const SignInPage = () => {
    return (
        <Suspense fallback={<LinearLoading />}>
            <SignIn />
        </Suspense>
    );
};
