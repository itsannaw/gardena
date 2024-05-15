import { Button } from "@nextui-org/react";

import { DeleteHistoryButtonProps } from "@/types/ui";

export const DeleteHistoryButton = ({ onDelete }: DeleteHistoryButtonProps) => {
    return (
        <div className="flex items-center justify-center">
            <Button isIconOnly variant="light" onClick={onDelete}>
                <img src="/icons/trash.svg" alt="Trash" className="h-5 w-5" />
            </Button>
        </div>
    );
};
