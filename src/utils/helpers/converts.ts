import camelcaseKeys from "camelcase-keys";

export function convertSnakeToCamelKeys<T>(response: T) {
    return camelcaseKeys(JSON.parse(JSON.stringify(response)), {
        deep: true,
    });
}
