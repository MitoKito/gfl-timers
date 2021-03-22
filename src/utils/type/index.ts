export const tuple = <T extends unknown[]>(...args: T): unknown[] => args;

// Extract the type of an element of an array/tuple without performing indexing
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;
