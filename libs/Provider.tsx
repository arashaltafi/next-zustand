'use client'

import { ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { StoreState, createUnifiedStore } from '@/libs/Stores'

type StoreApi = ReturnType<typeof createUnifiedStore>

const StoreContext = createContext<StoreApi | undefined>(undefined)

const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<StoreApi>()
    
    if (!storeRef.current) {
        storeRef.current = createUnifiedStore()
    }

    return (
        <StoreContext.Provider value={storeRef.current}>
            {children}
        </StoreContext.Provider>
    )
}

const useAppStore = <T,>(selector: (store: StoreState) => T): T => {
    const storeContext = useContext(StoreContext)

    if (!storeContext) {
        throw new Error('useAppStore must be used within StoreProvider')
    }

    return useStore(storeContext, selector)
}

export { StoreProvider, useAppStore }