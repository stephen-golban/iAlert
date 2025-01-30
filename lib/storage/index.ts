import AsyncStorage from "@react-native-async-storage/async-storage";

type StorageError = {
  code: string;
  message: string;
  details?: unknown;
};

class StorageService {
  private static instance: StorageService;
  private initialized: boolean = false;

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  async init() {
    if (this.initialized) return;

    try {
      // Test storage access
      await AsyncStorage.setItem("__storage_test__", "test");
      await AsyncStorage.removeItem("__storage_test__");
      this.initialized = true;
    } catch (error) {
      throw this.handleError(error, "STORAGE_INIT_ERROR");
    }
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      throw this.handleError(error, "STORAGE_GET_ERROR", { key });
    }
  }

  async setItem(key: string, value: unknown): Promise<void> {
    try {
      const serializedValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, serializedValue);
    } catch (error) {
      throw this.handleError(error, "STORAGE_SET_ERROR", { key });
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw this.handleError(error, "STORAGE_REMOVE_ERROR", { key });
    }
  }

  private handleError(
    error: unknown,
    code: string,
    context?: object
  ): StorageError {
    console.error(`Storage error (${code}):`, error, context);

    return {
      code,
      message: error instanceof Error ? error.message : "Unknown storage error",
      details: {
        originalError: error,
        ...context,
      },
    };
  }
}

export const storage = StorageService.getInstance();
