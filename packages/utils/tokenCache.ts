// packages/utils/tokenCache.ts
import * as SecureStore from "expo-secure-store";

export async function saveToken(key: string, value: string) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (err) {
    // Handle token saving errors
    console.error("Failed to save token to secure store", err);
  }
}

export async function getToken(key: string) {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    // Handle token retrieval errors
    console.error("Failed to get token from secure store", err);
    return null;
  }
}
