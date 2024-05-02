import { useAppSelector } from "@/hooks/reduxHooks";

export function useAuth() {
    const { email } = useAppSelector((state) => state.userSlice);

    return {
        isAuth: !!email,
    };
}
