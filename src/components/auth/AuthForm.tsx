import { Button, Card, Input } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { AuthFormProps } from "../../types";

export const AuthForm = ({
    handleSubmit,
    headerText,
    submitText,
    linkQuest,
    linkUrl,
    linkText,
}: AuthFormProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
                    onSubmit={(event) => handleSubmit(email, password, event)}
                >
                    <div className="flex w-full flex-col items-center gap-5">
                        <Input
                            isClearable
                            type="email"
                            label="Email"
                            variant="bordered"
                            placeholder="Email address"
                            className="max-w-xs"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            onClear={() => setEmail("")}
                        />
                        <Input
                            isClearable
                            type="password"
                            label="Password"
                            variant="bordered"
                            placeholder="Password"
                            className="max-w-xs"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                            onClear={() => setPassword("")}
                        />
                    </div>
                    <Button type="submit" className="w-full bg-button-green" variant="solid">
                        {submitText}
                    </Button>
                </form>
                <div className="text-sm">
                    {linkQuest} {""}
                    <Link className="border-b-2 text-sm" to={linkUrl} color="foreground">
                        {linkText}
                    </Link>
                </div>
            </Card>
        </section>
    );
};
