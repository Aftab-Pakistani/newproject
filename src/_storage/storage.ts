import { StorageKeyTypes } from "@ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Define types for key and value
type StorageKey = StorageKeyTypes;

// Arrow function for setting an item in AsyncStorage
export const setStorage = async <T>(
  key: keyof StorageKeyTypes,
  value: T
): Promise<void> => {
  try {
   // console.log(`AsyncStorage - Set item: ${key}`);
   await AsyncStorage.setItem(key, JSON.stringify(value));
    //await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (error) {
    console.error(`AsyncStorage - Error setting item: ${key}`, error);
  }
};

// Arrow function for getting an item from AsyncStorage
export const getStorage = async <T>(
  key: keyof StorageKeyTypes
): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key)
    //const value = await SecureStore.getItemAsync(key);
    // console.log(`AsyncStorage - Get item: ${key}`);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error(`AsyncStorage - Error getting item: ${key}`, error);
    return null;
  }
};

// Arrow function for removing an item from AsyncStorage
export const removeStorage = async (
  key: keyof StorageKeyTypes
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    //await SecureStore.deleteItemAsync(key);
    // console.log(`AsyncStorage - Remove item: ${key}`);
  } catch (error) {
    console.error(`AsyncStorage - Error removing item: ${key}`, error);
  }
};

// Arrow function for clearing all items from AsyncStorage
export const clearStorage = async (): Promise<void> => {
  try {
    // SecureStore does not have a clear method, so we delete items one by one
    const keys = await AsyncStorage.getAllKeys();
    await Promise.all(keys.map((k: any) => AsyncStorage.removeItem(k)));
    // console.log("AsyncStorage - Cleared all items");
  } catch (error) {
    console.error("AsyncStorage - Error clearing items", error);
  }
};
