import './loginUser.css';
import PopUpMenu from '../popUpMenu/PopUpMenu.jsx';
import popUpIcon from '../popUpMenu/popUpIcons/popupicon.png';
import { useContext, useState } from 'react';
import languageContext from '../../context/languageContext.jsx';

export default function LoginUser(props) {
  const { toggleLanguageEN, toggleLanguageRU, toggleCardLanguageEN, toggleCardLanguageRU } = useContext(languageContext);

  let [popUp, setPopUp] = useState(false);
  function togglePopUp() {
    setPopUp(!popUp);
  }

  return (
    <>
      <div className="user__wrapper">
        <div className="user__bg">
          <span className="user__letter">{props.userLetter}</span>
        </div>
        <button
          className="lang__en"
          onClick={() => {
            toggleLanguageEN();
            toggleCardLanguageEN();
          }}
        >
          EN
        </button>
        <button
          className="lang__ru"
          onClick={() => {
            toggleLanguageRU();
            toggleCardLanguageRU();
          }}
        >
          RU
        </button>
        <span className="user__name">{props.userName}</span>
        <button className="popUp__btn" onClick={togglePopUp}>
          <img className="popUp__icon" src={popUpIcon} alt="icon" />
        </button>
      </div>
      <PopUpMenu popUp={popUp} />
    </>
  );
}
