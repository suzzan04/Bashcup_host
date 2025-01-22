import { WebStorage } from "redux-persist/lib/types";

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined";

  // Returns noop (dummy) storage.
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return {
    getItem(key: string) {
      return Promise.resolve(window.localStorage.getItem(key));
    },
    setItem(key: string, value: string) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    },
    removeItem(key: string) {
      window.localStorage.removeItem(key);
      return Promise.resolve();
    },
  };
}
