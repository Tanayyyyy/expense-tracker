import { create } from "zustand";
import { persist } from "zustand/middleware";

// API call function
const fetchUserData = async (email, password) => {
    const response = await fetch(``); // call api to fetch one month data
    const data = await response.json();
    return data;
};

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: async (email, password) => {
                const userData = await fetchUserData(email, password);
                set({ user: userData, isAuthenticated: true });
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: "User Info",
        }
    )
);

export default useAuthStore;
