import './headerList.css';

export default function HeaderList({ initial }) {
  let languageContent = initial;
  return (
    <>
      <ul className="nav">
        <li className="nav__link">{languageContent.link_1}</li>
        <li className="nav__link">{languageContent.link_2}</li>
        <li className="nav__link">{languageContent.link_3}</li>
      </ul>
    </>
  );
}
