import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/components/auth/AuthForm";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { registerUser } from "@/store/user/userThunk";
import { FormUserData } from "@/types/auth";
import { ROUTES } from "@/utils/constants/routes";

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignUp = async ({ email, password }: FormUserData) => {
        try {
            await dispatch(registerUser({ email, password })).unwrap();
            navigate(ROUTES.HOME);
        } catch (error) {
            alert((error as FirebaseError).message);
        }
    };

    return (
        <AuthForm
            handleForm={handleSignUp}
            headerText="Sign Up"
            submitText="Sign Up"
            linkQuestionText="Already have an account?"
            linkUrl={ROUTES.LOGIN}
            linkText="Log In"
        />
    );
};

export default SignUp;
