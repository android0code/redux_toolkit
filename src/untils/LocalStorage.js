// write by "Amrik"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PrefKeys = {
  USER: 'user',
  TOKEN: 'token',
};

/**
 * Save a value to AsyncStorage.
 * @param {string} key - The key for the value to store.
 * @param {any} value - The value to store (will be stringified).
 */
export const saveToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`Saved ${key} successfully.`);
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
  }
};

/**
 * Retrieve a value from AsyncStorage.
 * @param {string} key - The key for the value to retrieve.
 * @returns {Promise<any>} - The parsed value from storage, or null if not found.
 */
export const getFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return null;
  }
};

/**
 * Remove a value from AsyncStorage.
 * @param {string} key - The key for the value to remove.
 */
export const removeFromStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Removed ${key} successfully.`);
  } catch (error) {
    console.error(`Error removing ${key}:`, error);
  }
};
