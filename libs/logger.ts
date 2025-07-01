import { StateCreator } from 'zustand';
import { State } from './useStore';

export const logger: (config: StateCreator<State>) => StateCreator<State> =
    (config) =>
        (set, get, api) => {
            // Create patchedSet that always passes 'replace' as undefined
            const patchedSet: typeof set = (partial, replace) => {
                console.group(`[Zustand] ${new Date().toISOString()}`);
                console.log("🧾 Prev state:", get());
                console.log("🔧 Update:", partial, "replace?", replace);
                set(partial as any, undefined); // ensure replace is undefined
                console.log("✅ Next state:", get());
                console.groupEnd();
            };
            // Use patchedSet and return config 
            return config(patchedSet, get, api);
        };