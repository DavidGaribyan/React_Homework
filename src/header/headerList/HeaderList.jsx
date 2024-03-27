import { useContext } from 'react';
import './headerList.css';

export default function HeaderList(props) {
  return (
    <>
      <ul className="nav">
        <li className="nav__link">{props.link_1}</li>
        <li className="nav__link">{props.link_2}</li>
        <li className="nav__link">{props.link_3}</li>
      </ul>
    </>
  );
}
