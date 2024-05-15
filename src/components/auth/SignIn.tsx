import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/components/auth/AuthForm";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { loginUser } from "@/store/user/userThunk";
import { FormUserData } from "@/types/auth";
import { ROUTES } from "@/utils/constants/routes";

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = async ({ email, password }: FormUserData) => {
        try {
            await dispatch(loginUser({ email, password })).unwrap();
            navigate(ROUTES.HOME);
        } catch (error) {
            alert((error as FirebaseError).message);
        }
    };

    return (
        <AuthForm
            handleForm={handleLogin}
            headerText="Log In"
            submitText="Log In"
            linkQuestionText="You don't have an account?"
            linkUrl={ROUTES.SIGNUP}
            linkText="Sign up"
            validatePassword={false}
        />
    );
};

export default SignIn;
