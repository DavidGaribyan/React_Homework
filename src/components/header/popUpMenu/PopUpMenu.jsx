import './popUpMenu.css';

import { useContext } from 'react';
import languageContext from '../../context/languageContext.jsx';

export default function PopUpMenu({ popUp }) {
  const { language } = useContext(languageContext);
  return (
    <>
      <ul className={`popUp__list ${popUp ? 'visible' : ''}`}>
        {language.menuData.map((item, index) => {
          return (
            <li className="popUp__item" key={index}>
              <button className="popUp__item-btn">
                <img src={item.icon} alt="icon" />
                <span className="popUp__itext">{item.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
