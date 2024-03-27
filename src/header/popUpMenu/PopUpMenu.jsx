import './popUpMenu.css';

import { menuDataRU, menuDataEN } from '../../userData/HeaderData.jsx';

export default function PopUpMenu() {
  return (
    <>
      <ul className="popUp__list">
        {menuDataEN.map((item, index) => {
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
