import camelcaseKeys from "camelcase-keys";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { Timestamp } from "firebase/firestore";

export function convertSnakeToCamelKeys<T>(response: T) {
    return camelcaseKeys(JSON.parse(JSON.stringify(response)), {
        deep: true,
    });
}

export function formatTimestamp(timestamp: Timestamp) {
    const date = timestamp.toDate();
    return formatDistanceToNow(date, { addSuffix: true, locale: enUS });
}
