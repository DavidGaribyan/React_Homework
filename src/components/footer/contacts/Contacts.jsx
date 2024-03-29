import email from './contactIcons/email.png';
import place from './contactIcons/place.png';
import clock from './contactIcons/clock.png';
import phone from './contactIcons/phone.png';
import './contact.css';
export default function Contacts({ initial }) {
  let languageContent = initial;
  return (
    <>
      <div className="contacts__wrapper">
        <div className="contacts__item">
          <img src={email} alt="icon" />
          <p>{languageContent.contactEmail}</p>
        </div>
        <div className="contacts__item">
          <img src={place} alt="icon" />
          <p>{languageContent.contactPlace}</p>
        </div>
        <div className="contacts__item">
          <img src={clock} alt="icon" />
          <p>{languageContent.contactTime}</p>
        </div>
        <div className="contacts__item">
          <img src={phone} alt="icon" />
          <p>{languageContent.contactPhone}</p>
        </div>
      </div>
    </>
  );
}
