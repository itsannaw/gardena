import { FieldError, UseFormRegister } from "react-hook-form";

export interface FormUserData {
    email: string;
    password: string;
}

export interface FormUserFieldProps {
    name: ValidUserFieldNames;
    register: UseFormRegister<FormUserData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}

export type ValidUserFieldNames = "email" | "password";

export interface AuthFormProps {
    handleForm: (data: FormUserData) => void;
    headerText: string;
    submitText: string;
    linkQuestionText: string;
    linkUrl: string;
    linkText: string;
    validatePassword?: boolean;
}
