// TranslationContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create the context
const TranslationContext = createContext();

// Create a provider component
export function TranslationProvider({ children, initialMessages }) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const newMessages = await import(`../src/messages/${router.locale}.json`)
          .then((mod) => mod.default);
        setMessages(newMessages);
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };
    
    loadMessages();
  }, [router.locale]);
  
  // Create a translation function
  const t = (key) => {
    return key.split('.').reduce((obj, part) => obj?.[part], messages) || key;
  };

  return (
    <TranslationContext.Provider value={{ t, messages }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Create a hook to use the context
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}