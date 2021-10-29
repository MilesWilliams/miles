/**
 *
 * @param objects
 * @param key
 */
export function ToHashMap<T>(obj: T[], state: any, key: string): { [key: string]: T } {
    return obj.reduce(
        (entities: { [id: string]: T }, item: T) => {
            let param = item[key];
            if (Array.isArray(item[key])) {
                param = item[key][0];
            }
            return {
                ...entities,
                [param]: item,
            };
        },
        { ...state.entities }
    );
}

/**
 *
 * @export
 * @param {*} entities
 * @returns {T[]}
 */
export function FromHashMap<T>(entities): T[] {

    if (entities) {
        return Object.keys(entities).map(key => {
            if (key) return entities[key];
        });
    }
}