import './FooterContent.css';
import Info from './info/Info';
import List from './list/List';
import Contacts from './contacts/Contacts';
import Wrapper from '../header/headerWrapper/Wrapper';
import { useContext } from 'react';
import languageContext from '../context/languageContext';

export default function Footer() {
  const { language } = useContext(languageContext);
  return (
    <>
      <div className="footer__bg">
        <Wrapper>
          <Info initial={language} />
          <List initial={language} />
          <Contacts initial={language} />
        </Wrapper>
      </div>
    </>
  );
}
