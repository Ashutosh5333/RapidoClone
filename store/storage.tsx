import { MMKV } from 'react-native-mmkv';

export const tokenstorage = new MMKV({
    id:'token-storage',
    encryptionKey:'some-scret-key'
});

export const storage = new MMKV({
    id:'my-app-storage',
    encryptionKey:'some-scret-key'
});


export const mmkvStorage={
     setItem:(key:string, value:string) =>{
        storage.set(key,value)
     },
     getItem: (key: string): string | null => {
        const value = storage.getString(key);
        return value !== undefined ? value : null;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    }
}
