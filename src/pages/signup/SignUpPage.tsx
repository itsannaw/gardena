import { Suspense, lazy } from "react";

import { LinearLoading } from "@/components";

const SignUp = lazy(() => import("@/components/auth/SignUp"));

export const SignUpPage = () => {
    return (
        <Suspense
            fallback={
                <div className="flex h-screen items-center justify-center">
                    <LinearLoading />
                </div>
            }
        >
            <SignUp />
        </Suspense>
    );
};
