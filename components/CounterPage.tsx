'use client'

import { useAppStore } from '@/libs/Provider'

const CounterPage = () => {
    const count = useAppStore((state) => state.count)
    const incrementCount = useAppStore((state) => state.incrementCount)
    const decrementCount = useAppStore((state) => state.decrementCount)
    const emptyCount = useAppStore((state) => state.emptyCount)

    return (
        <div className="w-full min-h-screen flex flex-col gap-16 p-16 items-center justify-start">
            <h1 className="text-5xl">Counter App</h1>

            <p className="text-lg">
                Count: {count}
            </p>
            <div className="w-full flex gap-8 items-center justify-center">
                <button
                    className="btn-green"
                    onClick={() => incrementCount()}
                >
                    Increment Count
                </button>
                <button
                    className="btn-rose"
                    onClick={() => decrementCount()}
                >
                    Decrement Count
                </button>
                <button
                    className="btn-red"
                    onClick={() => emptyCount()}
                >
                    Empty Count
                </button>
            </div>
        </div>
    )
}

export default CounterPage