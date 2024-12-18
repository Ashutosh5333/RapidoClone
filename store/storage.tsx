import { MMKV } from "react-native-mmkv";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

// export const tokenstorage = new MMKV({
//     id:'token-storage',
//     encryptionKey:'some-scret-key'
// });

export const tokenstorage = isWeb
  ? null // Use a web alternative like localStorage
  : new MMKV({
      id: "token-storage",
      encryptionKey: "some-secret-key",
    });

// export const storage = new MMKV({
//     id:'my-app-storage',
//     encryptionKey:'some-scret-key'
// });

export const storage = isWeb
  ? null // Use a web alternative like localStorage
  : new MMKV({
      id: "my-app-storage",
      encryptionKey: "some-secret-key",
    });

// export const mmkvStorage={
//      setItem:(key:string, value:string) =>{
//         storage.set(key,value)
//      },
//      getItem: (key: string): string | null => {
//         const value = storage.getString(key);
//         return value !== undefined ? value : null;
//     },
//     removeItem: (key: string) => {
//         storage.delete(key);
//     }
// }

export const mmkvStorage = {
  setItem: (key: string, value: string) => {
    if (isWeb) {
      localStorage.setItem(key, value);
    } else {
      storage?.set(key, value);
    }
  },
  getItem: (key: string): string | null => {
    if (isWeb) {
      return localStorage.getItem(key);
    } else {
      const value = storage?.getString(key);
      return value !== undefined ? value : null;
    }
  },
  removeItem: (key: string) => {
    if (isWeb) {
      localStorage.removeItem(key);
    } else {
      storage?.delete(key);
    }
  },
};
