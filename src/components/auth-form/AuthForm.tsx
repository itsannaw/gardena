import { Button, Input } from "@nextui-org/react";

export const AuthForm = () => {
    return (
        <form className="flex flex-col gap-8 w-full max-w-md mx-auto">
            <div className="flex flex-col gap-5 w-full items-center">
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Email address"
                    className="max-w-xs"
                />
                <Input
                    isClearable
                    type="password"
                    label="Password"
                    variant="bordered"
                    placeholder="Password"
                    className="max-w-xs"
                />
            </div>
            <Button className="w-full bg-button-green" variant="solid">
                Submit
            </Button>
        </form>
    );
};
