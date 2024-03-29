import './information.css';
import Button from '../button/InfoBtn.jsx';
export default function Information({ initial }) {
  let language = initial;
  return (
    <>
      <div className="info__wrapper">
        <h1 className="information__heading">
          <span className="heading__decoration">{language.headingDecoration}</span> {language.headingText}
        </h1>
        <p className="information__text">
          {language.informationText} <span className="infoText__decor">{language.infoTextDecor}</span> {language.separateText} <span className="infoText__decor">{language.infoTextDecor_2}</span> {language.informationText_2} <span className="stores__decor">{language.store_1}</span> {language.and} <span className="stores__decor">{language.store_2}</span>
        </p>
        <Button className="white" btnName={language.btn_book} />
        <Button className="blue" btnName={language.btn_how} />
      </div>
    </>
  );
}
