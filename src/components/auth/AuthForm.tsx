import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { AuthFormProps, FormUserData } from "@/types/auth";
import { authSchema } from "@/utils/zod/authSchema";

import { EmailInput } from "../ui/inputs/email/EmailInput";
import { PasswordInput } from "../ui/inputs/password/PasswordInput";

export const AuthForm = ({
    handleForm,
    headerText,
    submitText,
    linkQuestionText,
    linkUrl,
    linkText,
    validatePassword = true,
}: AuthFormProps) => {
    const schema = authSchema({ validatePassword });
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormUserData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormUserData) => {
        handleForm(data);
    };

    return (
        <section className="flex min-h-[calc(100vh-255px)] items-center justify-center">
            <img
                className="absolute right-40 top-40 hidden h-[196px] w-[320px] md:block"
                src="/auth/leaves-right.png"
                alt="Leaves"
            />
            <img
                className="absolute bottom-40 left-32 hidden h-[186px] w-[300px] md:block"
                src="/auth/leaves-left.png"
                alt="Leaves"
            />
            <Card className="flex w-full max-w-[400px] flex-col items-center gap-5 px-10 py-7">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-dark-gray-900 text-3xl font-extrabold">{headerText}</h1>
                </div>
                <span className="text-gray-400 ">Enter your email and password</span>
                <form
                    className="mx-auto flex w-full max-w-md flex-col gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex w-full flex-col items-center gap-5">
                        <EmailInput register={register} name="email" error={errors.email} />
                        <PasswordInput
                            register={register}
                            name="password"
                            error={errors.password}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-button-green"
                        variant="solid"
                        isLoading={isSubmitting}
                    >
                        {submitText}
                    </Button>
                </form>
                <div className="text-sm">
                    {linkQuestionText} {""}
                    <Link className="border-b-2 text-sm" to={linkUrl} color="foreground">
                        {linkText}
                    </Link>
                </div>
            </Card>
        </section>
    );
};
