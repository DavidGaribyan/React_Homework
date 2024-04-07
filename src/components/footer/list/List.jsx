import './list.css';
export default function List({ initial }) {
  const languageContent = initial;
  return (
    <>
      <ul className="footer__list">
        <li>{languageContent.footerListItem_1}</li>
        <li>{languageContent.footerListItem_2}</li>
        <li>{languageContent.footerListItem_3}</li>
        <li>{languageContent.footerListItem_4}</li>
        <li>{languageContent.footerListItem_5}</li>
        <li>{languageContent.footerListItem_6}</li>
      </ul>
    </>
  );
}
