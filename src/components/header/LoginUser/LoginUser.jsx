import './loginUser.css';
import PopUpMenu from '../popUpMenu/PopUpMenu.jsx';
import { useState } from 'react';
import i18n from '../../../components/i18n';
import { useTranslation } from 'react-i18next';

export default function LoginUser(props) {
  const { t } = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const popUpIcon = t('popUpIcon');
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
      i18n.changeLanguage(lang);
      toggleLanguageBg('ru');
      toggleLanguageBg('en');
    } else if (lang === 'en') {
      i18n.changeLanguage(lang);
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
        <button className={`lang__en ${langBgEn}`} onClick={() => toggleLanguageFunctionCombined('en')}>
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
          <img className="popUp__icon" src={`../${popUpIcon}`} alt="icon" />
        </button>
        <PopUpMenu popUp={popUp} />
      </div>
    </>
  );
}
