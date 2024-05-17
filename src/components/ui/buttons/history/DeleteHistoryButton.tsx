import { Button } from "@nextui-org/react";

import { TrashIcon } from "@/components/icons/TrashIcon";
import { DeleteHistoryButtonProps } from "@/types/ui";

export const DeleteHistoryButton = ({ onDelete }: DeleteHistoryButtonProps) => {
    return (
        <div className="flex items-center justify-center">
            <Button isIconOnly variant="light" onClick={onDelete}>
                <TrashIcon className="stroke-black dark:stroke-white" />
            </Button>
        </div>
    );
};
