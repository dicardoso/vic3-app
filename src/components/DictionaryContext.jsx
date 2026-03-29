"use client";

import { createContext, useContext } from 'react';

const DictionaryContext = createContext(null);

export function DictionaryProvider({ children, dictionary, lang }) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return context;
}
