/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_BASE: string;
    // Здесь можно добавить другие ваши переменные окружения
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }