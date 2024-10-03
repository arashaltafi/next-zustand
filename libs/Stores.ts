import { createStore } from 'zustand/vanilla'
import {
    CounterState,
    CounterActions,
    CounterInitState,
} from '@/libs/features/counter'
import {
    AppSettingsState,
    AppSettingsActions,
    AppSettingsInitState,
} from '@/libs/features/global'

type initStateType = AppSettingsState & CounterState
type actionStateType = CounterActions & AppSettingsActions
type StoreState = initStateType & actionStateType

const initState: initStateType = {
    ...CounterInitState,
    ...AppSettingsInitState,
}

const createUnifiedStore = () => {
    return createStore<StoreState>()((set) => ({
        ...initState,
        decrementCount: () => set((state) => ({ count: state.count - 1 })),
        incrementCount: () => set((state) => ({ count: state.count + 1 })),
        emptyCount: () => set(() => ({ count: 0 })),
        setUsername: (username) => set(() => ({ username })),
        setTheme: (theme) => set(() => ({ theme })),
        setToken: (token) => set(() => ({ token })),
    }))
}

export { type StoreState, createUnifiedStore }