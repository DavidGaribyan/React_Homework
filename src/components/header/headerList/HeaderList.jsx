import { Link } from 'react-router-dom';
import './headerList.css';

export default function HeaderList({ initial }) {
  const languageContent = initial;
  return (
    <>
      <ul className="nav">
        <Link to="/howToUse" className="nav__link">
          {languageContent.link_1}
        </Link>
        <Link to="/myNotes" className="nav__link">
          {languageContent.link_2}
        </Link>
        <Link to="/bookDoctor" className="nav__link">
          {languageContent.link_3}
        </Link>
      </ul>
    </>
  );
}
