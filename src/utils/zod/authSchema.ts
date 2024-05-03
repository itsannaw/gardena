import { z } from "zod";

export const authSchema = (options: { validatePassword: boolean }) => {
    const schema = z.object({
        email: z.string().email(),
        password: options?.validatePassword ? z.string().min(8).max(20) : z.string(),
    });

    return schema;
};
