import { useEffect, RefObject, useCallback } from "react";

const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, callback: () => void) => {
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        },
        [callback, ref],
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback, handleClickOutside]);
};

export default useClickOutside;
