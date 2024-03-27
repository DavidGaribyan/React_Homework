import Header from './header/header.jsx';
import MainCont from './main/MainCont.jsx';
import languageContext from './context/languageContext.jsx';
import { headerListPropsRU } from './userData/HeaderData.jsx';
import { bookContentRU } from './userData/mainContData.jsx';
import { useState } from 'react';
function App() {
  const [lang, setLang] = useState([{ headerListPropsRU }, { bookContentRU }]);
  return (
    <>
      <languageContext.Provider value={[lang, setLang]}>
        <Header />
        <MainCont />
      </languageContext.Provider>
    </>
  );
}

export default App;
