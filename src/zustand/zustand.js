import { create } from "zustand";
import { persist } from "zustand/middleware";

// Simple zustand store with devtools + persistence
const useStore = create(
  persist(
    (set, get) => ({
      // state
      user: null,
      theme: "light",
      loading: false,

      // actions
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

      setLoading: (loading) => set({ loading }),

      // example async action
      fetchUser: async (id) => {
        set({ loading: true });
        try {
          const res = await fetch(`/api/users/${id}`);
          if (!res.ok) throw new Error("Failed to fetch user");
          const data = await res.json();
          set({ user: data });
        } catch (e) {
          console.error(e);
        } finally {
          set({ loading: false });
        }
      },

      // reset to defaults
      reset: () => set({ user: null, theme: "light", loading: false }),
    }),
    {
      name: "my-app-storage", // key in storage
      // getStorage: () => sessionStorage, // uncomment to use sessionStorage
    }
  )
);

export default useStore;
