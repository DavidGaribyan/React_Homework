import './information.css';
import Button from '../button/InfoBtn.jsx';
import { infoDataEN, infoDataRU } from '../../../userData/mainContData.jsx';
export default function Information() {
  return (
    <>
      <div className="info__wrapper">
        <h1 className="information__heading">
          <span className="heading__decoration">{infoDataRU.headingDecoration}</span> {infoDataRU.headingText}
        </h1>
        <p className="information__text">
          {infoDataRU.informationText} <span className="infoText__decor">{infoDataRU.infoTextDecor}</span> {infoDataRU.separateText} <span className="infoText__decor">{infoDataRU.infoTextDecor_2}</span> {infoDataRU.informationText_2} <span className="stores__decor">{infoDataRU.store_1}</span> {infoDataRU.and} <span className="stores__decor">{infoDataRU.store_2}</span>
        </p>
        <Button className="white" btnName={infoDataRU.btn_book} />
        <Button className="blue" btnName={infoDataRU.btn_how} />
      </div>
    </>
  );
}
