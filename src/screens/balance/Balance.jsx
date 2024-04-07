import BalanceHistory from './balanceHistory/BalanceHistory';
import WrapperMain from '../../components/wrapperMain/WrapperMain';
import Button from '../../components/main/consultations/button/InfoBtn';
import './balance.css';
import { useContext, useMemo, useState } from 'react';
import languageContext from '../../components/context/languageContext';

export default function Balance() {
  const { language } = useContext(languageContext);
  const [balancePeriud, setBalancePeriud] = useState('1');

  const filteredData = useMemo(() => {
    switch (balancePeriud) {
      case '1':
        return language.balanceData.filter((item) => item.balancePeriud === '1');
      case '2':
        return language.balanceData.filter((item) => item.balancePeriud === '1' || item.balancePeriud === '2');
      case '3':
        return language.balanceData.filter((item) => item.balancePeriud === '1' || item.balancePeriud === '2' || item.balancePeriud === '3');
      default:
        return [];
    }
  }, [balancePeriud, language.balanceData]);

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
          <li onClick={() => setBalancePeriud('1')} className={`balanceNotes__item  ${balancePeriud === '1' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_1}
          </li>
          <li onClick={() => setBalancePeriud('2')} className={`balanceNotes__item  ${balancePeriud === '2' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_2}
          </li>
          <li onClick={() => setBalancePeriud('3')} className={`balanceNotes__item  ${balancePeriud === '3' ? 'balanceNotes__item-active' : ''}`}>
            {language.balanceListItem_3}
          </li>
        </ul>

        <BalanceHistory initial={filteredData} />
      </WrapperMain>
    </>
  );
}
