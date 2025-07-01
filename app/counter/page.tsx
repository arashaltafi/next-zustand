'use client';

import Button from "@/components/Button";
import { useStore } from "@/libs/useStore";
import { useShallow } from "zustand/react/shallow";

export default function CounterPage() {
    const { count, increment, decrement, resetCounter } = useStore(
        useShallow(state => ({
            count: state.count,
            increment: state.increment,
            decrement: state.decrement,
            resetCounter: state.resetCounter,
        }))
    );

    return (
        <div className="p-8 w-full min-h-screen flex flex-col items-center justify-center gap-12">
            <h1 className="text-3xl font-bold">Counter: {count}</h1>
            <div className="flex gap-8 mt-4">
                <Button
                    color="green"
                    onClick={increment}
                >
                    + 1
                </Button>
                <Button
                    color="red"
                    onClick={decrement}
                >
                    - 1
                </Button>
            </div>

            <Button
                color="blue"
                onClick={resetCounter}
            >
                Reset Counter
            </Button>
        </div>
    );
}