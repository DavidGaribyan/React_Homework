import './header.css';
import WrapperShadow from '../wrapperShadow/WrapperShadow.jsx';
import Wrapper from './headerWrapper/Wrapper.jsx';
import Logo from './Logo/LogoMain.jsx';
import HeaderList from './headerList/HeaderList.jsx';
import Notification from './Notification/Notification.jsx';
import LoginUser from './LoginUser/LoginUser.jsx';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <WrapperShadow>
        <Wrapper>
          <Logo />
          <div className="header__wrap">
            <HeaderList />
            <Notification notCount="3" />
            <LoginUser userName={t('name')} userLetter={t('name').charAt(0)} />
          </div>
        </Wrapper>
      </WrapperShadow>
    </>
  );
}
