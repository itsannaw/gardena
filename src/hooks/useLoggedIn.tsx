import { useAppSelector } from "@/hooks/reduxHooks";

export function useLoggedIn() {
    const { email } = useAppSelector((state) => state.userSlice);

    return !!email;
}
