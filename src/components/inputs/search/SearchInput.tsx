import { Input } from "@nextui-org/react";

const SearchIcon = () => (
    <button className="rounded-xl bg-light-green p-2">
        <img src="/icons/search.svg" alt="Search" className="h-5 w-5" />
    </button>
);

export const SearchInput = () => {
    return (
        <Input
            classNames={{
                input: [
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                inputWrapper: [
                    "bg-background",
                    "hover:!bg-background",
                    "focus-within:!bg-background",
                ],
            }}
            radius="lg"
            size="lg"
            placeholder="What are you looking for?"
            endContent={<SearchIcon />}
        />
    );
};