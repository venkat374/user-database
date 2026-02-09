import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async () => {
    return {
      success: true,
    };
  },

  logout: async () => {
    return {
      success: true,
    };
  },

  check: async () => {
    return {
      authenticated: true,
    };
  },

  getIdentity: async () => {
    return {
      id: "anonymous",
      name: "Anonymous User",
    };
  },

  onError: async () => {
    return { error: undefined };
  },
};
