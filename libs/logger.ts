import { StateCreator } from 'zustand';

export const logger = <TState>(
    config: StateCreator<TState>
): StateCreator<TState> => (set, get, api) =>
        config(
            (partial, replace) => {
                console.group(`[Zustand] ${new Date().toISOString()}`);
                console.log('Prev state:', get());
                console.log('Patch:', partial);
                set(partial as any, undefined);
                console.log('Next state:', get());
                console.groupEnd();
            },
            get,
            api
        );