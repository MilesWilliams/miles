const typeCache: { [label: string]: boolean } = {};

/**
 *
 * @param objects
 * @param key
 */
export function Type<T>(key: T | ''): T {
    if (typeCache[<string>key]) {
        throw new Error(`Action type "${key}" is not unique"`);
    }

    typeCache[<string>key] = true;

    return <T>key;
}