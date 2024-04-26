import { Input } from "@nextui-org/react";

const SearchIcon = () => (
    <button className="p-2 bg-light-green rounded-xl">
        <img src="../src/assets/icons/search.svg" alt="Search" className="h-5 w-5" />
    </button>
);

const SearchInput = () => {
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

export default SearchInput;
