import { createAuthClient } from "better-auth/client";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth.js";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return null;
};

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [inferAdditionalFields<typeof auth>()],
  fetchOptions: {
    onSuccess: (ctx) => {
      const authToken = ctx.response.headers.get("set-auth-token");
      if (authToken && typeof window !== "undefined") {
        localStorage.setItem("bearer_token", authToken);
      }
    },
    auth: {
      type: "Bearer",
      token: () => {
        const storage = getLocalStorage();
        return storage ? storage.getItem("bearer_token") || "" : "";
      },
    },
  },
});

export const { signIn, signUp, useSession } = authClient;
