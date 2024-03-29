import Header from './components/header/header.jsx';
import MainContent from './components/main/MainContent.jsx';
import FooterContent from './components/footer/FooterContent.jsx';
import languageContext from './components/context/languageContext.jsx';
import languageData from './pageData/LanguageData.jsx';
import { useState } from 'react';
import userData from './pageData/userData.jsx';

function App() {
  const [language, setLanguage] = useState(languageData.ru);
  const [userLanguage, setUserLanguage] = useState(userData.ru);
  const toggleLanguageEN = () => setLanguage(languageData.en);
  const toggleLanguageRU = () => setLanguage(languageData.ru);
  const toggleCardLanguageRU = () => setUserLanguage(userData.ru);
  const toggleCardLanguageEN = () => setUserLanguage(userData.en);

  return (
    <>
      <languageContext.Provider value={{ language, userLanguage, toggleLanguageEN, toggleLanguageRU, toggleCardLanguageRU, toggleCardLanguageEN }}>
        <Header />
        <MainContent />
        <FooterContent />
      </languageContext.Provider>
    </>
  );
}

export default App;
