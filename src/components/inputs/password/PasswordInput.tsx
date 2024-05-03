import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

import { FormUserFieldProps } from "@/types/auth";

export const PasswordInput = ({ name, error, register, valueAsNumber }: FormUserFieldProps) => {
    return (
        <Input
            {...register(name, { valueAsNumber })}
            type="password"
            label="Password"
            variant="bordered"
            placeholder="Password"
            className="max-w-xs"
            isInvalid={error?.message ? true : false}
            errorMessage={error?.message}
            color={error ? "danger" : "default"}
        />
    );
};

PasswordInput.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]).isRequired,
    register: PropTypes.func.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }),
    valueAsNumber: PropTypes.bool,
};
