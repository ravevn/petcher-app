export const setItem = (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value); // Преобразуем объект в строку
      localStorage.setItem(key, stringValue);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  };
  
  export const getItem = <T>(key: string): T | null => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null; // Преобразуем строку обратно в объект
    } catch (e) {
      console.error('Error reading from localStorage', e);
      return null;
    }
  };
  
  export const removeItem = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  };
  
  export const clearStorage = () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clearing localStorage', e);
    }
  };