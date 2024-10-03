type AppSettingsState = {
    username: string
    theme: 'light' | 'dark' | string
    token: string
}

type AppSettingsActions = {
    setUsername: (username: string) => void
    setTheme: (theme: 'light' | 'dark') => void
    setToken: (token: string) => void
}

const AppSettingsInitState: AppSettingsState = {
    username: '',
    theme: localStorage.getItem('theme') || 'light',
    token: '',
}

export { type AppSettingsState, type AppSettingsActions, AppSettingsInitState }