import Header from './components/header/header.jsx';
import MainContent from './components/main/MainContent.jsx';
import FooterContent from './components/footer/FooterContent.jsx';
import languageContext from './components/context/languageContext.jsx';
import languageData from './components/pageData/LanguageData.jsx';
import { useState } from 'react';
import userData from './components/pageData/userData.jsx';
import DoctorProfile from './screens/doctorProfile/DoctorProfile.jsx';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
        <FooterContent />
      </languageContext.Provider>
    </>
  );
}

export default App;
