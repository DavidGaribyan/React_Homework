import Information from './information/Information.jsx';
import doctorPic from './doctor.png';
import './consultations.css';
import { useContext } from 'react';
import languageContext from '../../context/languageContext.jsx';

export default function Consultations() {
  const { language } = useContext(languageContext);
  return (
    <>
      <div className="consultation__cont">
        <Information initial={language} />
        <img style={{ maxWidth: '610px' }} src={doctorPic} alt="doctor" />
      </div>
    </>
  );
}
