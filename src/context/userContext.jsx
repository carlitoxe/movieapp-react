import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import translationsRaw from "../translation.json";

const initialLanguage = navigator.language;
const translations = JSON.parse(JSON.stringify(translationsRaw));

const UserContext = createContext({
  language: "",
  setLanguage: () => {},
  texts: {},
});

const UserProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language_tmdb", initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  console.log(texts.header.title);

  const handleLanguage = (lang) => {
    setLanguage(lang);
    setTexts(translations[lang]);
  };

  return (
    <UserContext.Provider
      value={{
        language,
        setLanguage: handleLanguage,
        texts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
