import { Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { AuthForm } from "../../components";
import { ROUTES } from "../../const/routes";

export const LoginPage = () => {
    return (
        <section className="min-h-[calc(100vh-255px)] flex justify-center items-center">
            <img
                className="w-[320px] h-[196px] absolute right-40 top-40 md:block hidden"
                src="../src/assets/auth/leaves-right.png"
                alt="Leaves"
            />
            <img
                className="w-[300px] h-[186px] absolute bottom-40 left-32 md:block hidden"
                src="../src/assets/auth/leaves-left.png"
                alt="Leaves"
            />
            <Card className="flex flex-col max-w-[400px] w-full items-center py-8 px-10 gap-5">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-extrabold text-dark-gray-900">Log In</h1>
                    <p className="text-gray-400 text-center">Enter your email and password</p>
                </div>
                <Button className="w-full">
                    <img
                        className="h-5 mr-2"
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                        alt="Google"
                    />
                    Sign In with Google
                </Button>
                <span className="text-gray-400 ">or with email</span>
                <AuthForm />
                <div className="text-sm">
                    Not registered yet? {""}
                    <Link className="text-sm border-b-2" to={ROUTES.SIGNUP} color="foreground">
                        Create an Account
                    </Link>
                </div>
            </Card>
        </section>
    );
};
