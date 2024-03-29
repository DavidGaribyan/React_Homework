import Logo from '../../header/Logo/logoFooter.png';
import Social from './social/Social';
import './info.css';
export default function Info({ initial }) {
  let languageContent = initial;
  return (
    <>
      <div className="footer__info-wrapper">
        <img src={Logo} className="footer__logo" alt="logo" />
        <p className="footer__info-text">{languageContent.footerInfo_1}</p>
        <p className="footer__info-text">{languageContent.footerInfo_2}</p>
        <Social />
      </div>
    </>
  );
}
