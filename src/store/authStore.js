import { create } from "zustand";

// Try to rehydrate auth state from localStorage
const persisted = (() => {
  try {
    const raw = localStorage.getItem("auth");
    if (!raw) return { isAuthenticated: false, user: null };
    return JSON.parse(raw);
  } catch (e) {
    return { isAuthenticated: false, user: null };
  }
})();

const useAuthStore = create((set) => ({
  isAuthenticated: persisted.isAuthenticated || false,
  user: persisted.user || null,

  login: (userData) => {
    const next = { isAuthenticated: true, user: userData };
    try {
      localStorage.setItem("auth", JSON.stringify(next));
    } catch (e) {
      // ignore storage errors
    }
    set(next);
  },

  // Register a new user (stored in localStorage under 'users')
  register: (userData) => {
    try {
      const raw = localStorage.getItem("users");
      const users = raw ? JSON.parse(raw) : [];
      // avoid duplicate emails
      const exists = users.find((u) => u.email === userData.email);
      if (exists) return { success: false, message: "Email already registered" };
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      return { success: true };
    } catch (e) {
      return { success: false, message: "Storage error" };
    }
  },

  // Authenticate credentials against registered users
  authenticate: (email, password) => {
    try {
      const raw = localStorage.getItem("users");
      const users = raw ? JSON.parse(raw) : [];
      const found = users.find((u) => u.email === email && u.password === password);
      if (!found) return { success: false, message: "Invalid credentials" };
      const userData = { email: found.email, name: found.name };
      const next = { isAuthenticated: true, user: userData };
      localStorage.setItem("auth", JSON.stringify(next));
      set(next);
      return { success: true, user: userData };
    } catch (e) {
      return { success: false, message: "Auth error" };
    }
  },

  logout: () => {
    try {
      localStorage.removeItem("auth");
    } catch (e) {
      // ignore
    }
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
