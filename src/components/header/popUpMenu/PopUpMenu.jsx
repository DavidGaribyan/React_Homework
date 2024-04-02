import './popUpMenu.css';

import { useContext } from 'react';
import languageContext from '../../context/languageContext.jsx';
import { Link } from 'react-router-dom';

export default function PopUpMenu({ popUp }) {
  const { language } = useContext(languageContext);

  return (
    <>
      <ul className={`popUp__list ${popUp ? 'visible' : ''}`}>
        {language.menuData.map((item, index) => {
          return (
            <Link to={item.text === 'Пополнить баланс' || item.text === 'Top up balance' ? '/balance' : '/*'} className="popUp__item" key={index}>
              <button className="popUp__item-btn">
                <img src={item.icon} alt="icon" />
                <span className="popUp__itext">{item.text}</span>
              </button>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
