import { useNavigate } from "react-router-dom";

import { UrlParams } from "@/types/router";

export const useNavigateWithParams = () => {
    const navigate = useNavigate();

    const navigateWithParams = (path: string, params: UrlParams) => {
        let url = path;
        for (const param in params) {
            const value = params[param];
            url = url.replace(`:${param}`, value.toString());
        }
        navigate(url);
    };
    return {
        navigateWithParams,
    };
};
