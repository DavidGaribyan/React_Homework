import './header.css';
import WrapperShadow from '../wrapperShadow/WrapperShadow.jsx';
import Wrapper from './headerWrapper/Wrapper.jsx';
import Logo from './Logo/LogoMain.jsx';
import HeaderList from './headerList/HeaderList.jsx';
import Notification from './Notification/Notification.jsx';
import LoginUser from './LoginUser/LoginUser.jsx';
import { useContext } from 'react';
import languageContext from '../context/languageContext.jsx';

export default function Header() {
  const { language } = useContext(languageContext);
  return (
    <>
      <WrapperShadow>
        <Wrapper>
          <Logo />
          <div className="header__wrap">
            <HeaderList initial={language} />
            <Notification notCount="3" />
            <LoginUser userName={language.name} userLetter={language.name.charAt(0)} />
          </div>
        </Wrapper>
      </WrapperShadow>
    </>
  );
}
