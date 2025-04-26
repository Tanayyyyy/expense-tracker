import { create } from 'zustand';

const initialState = {
    userProfile: false,
    notification: false,
}
export const useUIStore = create((set, get) => ({
    activeMenu: true,
    screenSize: undefined,
    currentColor: '#03C9D7',
    currentMode: 'Light',
    themeSettings: false,
    isClicked: initialState,
    setActiveMenu: (value) => set({ activeMenu: value }),
    setScreenSize: (value) => set({ screenSize: value }),
    setCurrentColor: (value) => set({ currentColor: value }),
    setCurrentMode: (value) => set({ currentMode: value }),
    setThemeSettings: (value) => set({ themeSettings: value }),
    handleClick: (value) => set({ isClicked: { ...initialState, [value]: true } }),
    initialState: initialState
}));
