import { Progress } from "@nextui-org/react";

export const LinearLoading = () => {
    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
            color="default"
        />
    );
};
