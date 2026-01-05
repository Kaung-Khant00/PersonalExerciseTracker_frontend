import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Simple zustand store with devtools + persistence
const useStore = create(
  devtools(
    (set, get) => ({
      // state
      user: null,
      theme: "light",
      loading: false,
      activities: {
        data: [],
        loading: false,
        summary: {
          totalDistance: 0,
          totalDuration: 0,
          maxDistance: 0,
          minDistance: 0,
          maxDuration: 0,
          minDuration: 0,
        },
        error: null,
      },
      editingActivity: null,

      // actions
      setUser: (user) => set({ user }),
      setActivities: (activities, summary) =>
        set({
          activities: {
            data: activities,
            summary,
            loading: false,
            error: null,
          },
        }),
      setEditingActivity: (activity) => set({ editingActivity: activity }),
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
