import { Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { AuthForm } from "../../components";
import { ROUTES } from "../../const/routes";

export const LoginPage = () => {
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
            <Card className="flex w-full max-w-[400px] flex-col items-center gap-5 px-10 py-8">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-dark-gray-900 text-3xl font-extrabold">Log In</h1>
                    <p className="text-center text-gray-400">Enter your email and password</p>
                </div>
                <Button className="w-full">
                    <img
                        className="mr-2 h-5"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                        alt="Google"
                    />
                    Sign In with Google
                </Button>
                <span className="text-gray-400 ">or with email</span>
                <AuthForm />
                <div className="text-sm">
                    Not registered yet? {""}
                    <Link className="border-b-2 text-sm" to={ROUTES.SIGNUP} color="foreground">
                        Create an Account
                    </Link>
                </div>
            </Card>
        </section>
    );
};
