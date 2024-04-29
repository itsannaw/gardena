import { Button, Input } from "@nextui-org/react";

export const AuthForm = () => {
    return (
        <form className="mx-auto flex w-full max-w-md flex-col gap-8">
            <div className="flex w-full flex-col items-center gap-5">
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
