import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
  id: 'auth-storage',
  encryptionKey: 'user',
});

export const setSession = (key: string, value: string | number | boolean | Uint8Array) => {
  storage.set(key, value);
};

export const getSession = (key: string) => {
  return storage.getString(key);
};

export const deleteSession = (key: string) => {
  storage.delete(`${key}`);
};
