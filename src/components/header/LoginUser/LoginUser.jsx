import './loginUser.css';
import PopUpMenu from '../popUpMenu/PopUpMenu.jsx';
import popUpIcon from '../popUpMenu/popUpIcons/popupicon.png';
import { useContext, useState } from 'react';
import languageContext from '../../context/languageContext.jsx';

export default function LoginUser(props) {
  const { toggleLanguageEN, toggleLanguageRU, toggleCardLanguageEN, toggleCardLanguageRU } = useContext(languageContext);

  const [popUp, setPopUp] = useState(false);
  function togglePopUp() {
    setPopUp(!popUp);
  }

  const [langBgEn, setLangBgEn] = useState('');
  const [langBgRu, setLangBgRu] = useState('active');

  const toggleLanguageBg = (color) => {
    if (color === 'ru') {
      setLangBgRu(langBgRu === 'active' ? '' : 'active');
    } else if (color === 'en') {
      setLangBgEn(langBgEn === 'active' ? '' : 'active');
    }
  };
  const toggleLanguageFunctionCombined = (lang) => {
    if (lang === 'ru') {
      toggleLanguageRU();
      toggleCardLanguageRU();
      toggleLanguageBg('ru');
      toggleLanguageBg('en');
    } else if (lang === 'en') {
      toggleLanguageEN();
      toggleCardLanguageEN();
      toggleLanguageBg('ru');
      toggleLanguageBg('en');
    }
  };

  return (
    <>
      <div className="user__wrapper">
        <div className="user__bg">
          <span className="user__letter">{props.userLetter}</span>
        </div>
        <button
          className={`lang__en ${langBgEn}`}
          onClick={() => {
            toggleLanguageFunctionCombined('en');
          }}
        >
          EN
        </button>
        <button
          className={`lang__ru ${langBgRu}`}
          onClick={() => {
            toggleLanguageFunctionCombined('ru');
          }}
        >
          RU
        </button>
        <span className="user__name">{props.userName}</span>
        <button className="popUp__btn" onClick={togglePopUp}>
          <img className="popUp__icon" src={popUpIcon} alt="icon" />
        </button>
        <PopUpMenu popUp={popUp} />
      </div>
    </>
  );
}
