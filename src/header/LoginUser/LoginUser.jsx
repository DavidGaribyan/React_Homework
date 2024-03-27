import './loginUser.css';
import PopUpMenu from '../popUpMenu/PopUpMenu.jsx';
import popUpIcon from '../popUpMenu/popUpIcons/popupicon.png';
import { useState, useContext } from 'react';
import { headerListPropsRU, headerListPropsEN } from '../../userData/HeaderData';
import languageContext from '../../context/languageContext.jsx';

export default function LoginUser(props) {
  let [popUp, setPopUp] = useState(false);
  function togglePopUp() {
    setPopUp(!popUp);
  }
  const [lang, setLang] = useContext(languageContext);

  return (
    <>
      <div className="user__wrapper">
        <div className="user__bg">
          <span className="user__letter">{props.userLetter}</span>
        </div>
        <button className="lang__en">EN</button>
        <button className="lang__ru">RU</button>
        <span className="user__name">{props.userName}</span>
        <button className="popUp__btn" onClick={togglePopUp}>
          <img className="popUp__icon" src={popUpIcon} alt="icon" />
        </button>
      </div>
      {popUp ? <PopUpMenu /> : null}
    </>
  );
}
