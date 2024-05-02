import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/components/auth/AuthForm";
import { ROUTES } from "@/const/routes";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { loginUser } from "@/store/user/userThunk";


export const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async (
        email: string,
        password: string,
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        try {
            await dispatch(loginUser({ email, password })).unwrap();
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
            handleSubmit={handleLogin}
            headerText="Log In"
            submitText="Log In"
            linkQuest="You don't have an account?"
            linkUrl={ROUTES.SIGNUP}
            linkText="Sign up"
        />
    );
};
