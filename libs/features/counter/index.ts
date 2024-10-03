type CounterState = {
    count: number
}

type CounterActions = {
    decrementCount: () => void
    incrementCount: () => void
    emptyCount: () => void
}

const CounterInitState: CounterState = {
    count: 0,
}

export { type CounterState, type CounterActions, CounterInitState }