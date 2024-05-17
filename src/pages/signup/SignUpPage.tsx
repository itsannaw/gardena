import { Suspense, lazy } from "react";

import { LinearLoading } from "@/components";

const SignUp = lazy(() => import("@/components/auth/SignUp"));

export const SignUpPage = () => {
    return (
        <Suspense fallback={<LinearLoading />}>
            <SignUp />
        </Suspense>
    );
};
