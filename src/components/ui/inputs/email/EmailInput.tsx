import { Input } from "@nextui-org/react";
import PropTypes from "prop-types";

import { FormUserFieldProps } from "@/types/auth";

export const EmailInput = ({ name, error, register, valueAsNumber }: FormUserFieldProps) => {
    return (
        <Input
            {...register(name, { valueAsNumber })}
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Email"
            className="max-w-xs"
            isInvalid={!!error?.message}
            errorMessage={error?.message}
            color={error ? "danger" : "default"}
        />
    );
};

EmailInput.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol]).isRequired,
    register: PropTypes.func.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }),
    valueAsNumber: PropTypes.bool,
};
