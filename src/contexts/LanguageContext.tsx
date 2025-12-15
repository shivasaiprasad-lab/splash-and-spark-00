import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {TranslationSchema} from "@/types/translation.types";
import {enTranslations} from "@/locales/en"
import {zhTranslations} from "@/locales/zh";

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translations: TranslationSchema = language === 'en' ? enTranslations : zhTranslations;
    const keys = key.split('.');
    let value: unknown = translations;

    for (const k of keys) {
      // 若某一层级不存在，直接返回原key
      if (value === undefined || value === null) {
        return key;
      }
      value = value[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};