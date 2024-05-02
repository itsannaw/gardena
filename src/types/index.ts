export interface AuthData {
    email: string;
    password: string;
}

export interface AuthFormProps {
    handleSubmit: (
        email: string,
        password: string,
        event: React.FormEvent<HTMLFormElement>,
    ) => void;
    headerText: string;
    submitText: string;
    linkQuest: string;
    linkUrl: string;
    linkText: string;
}
