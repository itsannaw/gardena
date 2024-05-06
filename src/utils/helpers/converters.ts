export interface ConvertProps {
    [key: string]: string | number | boolean;
}

export const snakeToCamel = (str: string) => {
    return str.replace(/_([a-z])/g, (_match, letter) => {
        return letter.toUpperCase();
    });
};

export const convertKeysToCamelCase = (obj: ConvertProps) => {
    const camelCaseObj: ConvertProps = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            camelCaseObj[snakeToCamel(key)] = obj[key];
        }
    }
    return camelCaseObj;
};
