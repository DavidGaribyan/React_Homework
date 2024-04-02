import BalanceHistory from './balanceHistory/BalanceHistory';
import WrapperMain from '../../components/wrapperMain/WrapperMain';
import Button from '../../components/main/consultations/button/InfoBtn';
import './balance.css';
import { useContext, useState } from 'react';
import languageContext from '../../components/context/languageContext';

export default function Balance() {
  const { language } = useContext(languageContext);
  const filteredDay = language.balanceData.filter((item) => item.balancePeriud === '1');
  const filteredMonth = language.balanceData.filter((item) => item.balancePeriud === '1' || item.balancePeriud === '2');
  const filteredAll = language.balanceData.filter((item) => item.balancePeriud === '1' || item.balancePeriud === '2' || item.balancePeriud === '3');
  const [balancePeriud, setBalancePeriud] = useState(filteredDay);

  return (
    <>
      <WrapperMain>
        <div>
          <h2 className="balance__heading">{language.balanceHeading}</h2>
        </div>
        <div className="my__balance-wrapper">
          <p className="balance__amount">{language.balanceAmount}</p>
          <Button className="blue balanceBtn" btnName={language.balanceBtn}></Button>
        </div>

        <p className="balanceHistory__heading">{language.balanceHistoryListHeading}</p>

        <ul className="balanceNotes__list">
          <li onClick={() => setBalancePeriud(filteredDay)} className={`balanceNotes__item  ${balancePeriud === '1' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_1}
          </li>
          <li onClick={() => setBalancePeriud(filteredMonth)} className={`balanceNotes__item  ${balancePeriud === '2' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_2}
          </li>
          <li onClick={() => setBalancePeriud(filteredAll)} className={`balanceNotes__item  ${balancePeriud === '3' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_3}
          </li>
        </ul>

        <BalanceHistory initial={balancePeriud} />
      </WrapperMain>
    </>
  );
}
