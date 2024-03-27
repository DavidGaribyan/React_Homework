import './header.css';
import WrapperShadow from '../wrapperShadow/WrapperShadow.jsx';
import Wrapper from './headerWrapper/Wrapper.jsx';
import Logo from './Logo/LogoMain.jsx';
import HeaderList from './headerList/HeaderList.jsx';
import Notification from './Notification/Notification.jsx';
import LoginUser from './LoginUser/LoginUser.jsx';
import { headerListPropsRU, userName } from '../userData/HeaderData.jsx';

export default function Header() {
  return (
    <>
      <WrapperShadow>
        <Wrapper>
          <Logo />
          <div className="header__wrap">
            <HeaderList {...headerListPropsRU} />
            <Notification notCount="3" />
            <LoginUser userName={userName.name} userLetter={userName.name.charAt(0)} />
          </div>
        </Wrapper>
      </WrapperShadow>
    </>
  );
}
