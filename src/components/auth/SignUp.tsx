import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/components/auth/AuthForm";
import { ROUTES } from "@/const/routes";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { registerUser } from "@/store/user/userThunk";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignUp = async (
        email: string,
        password: string,
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        try {
            await dispatch(registerUser({ email, password })).unwrap();
            navigate(ROUTES.HOME);
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    };

    return (
        <AuthForm
            handleSubmit={handleSignUp}
            headerText="Sign Up"
            submitText="Sign Up"
            linkQuest="Already have an account?"
            linkUrl={ROUTES.LOGIN}
            linkText="Log In"
        />
    );
};
