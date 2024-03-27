import userIcon from '../header/popUpMenu/popUpIcons/usericon.png';
import balanceIcon from '../header/popUpMenu/popUpIcons/balance.png';
import helpIcon from '../header/popUpMenu/popUpIcons/helpicon.png';
import logOutIcon from '../header/popUpMenu/popUpIcons/logouticon.png';

let headerListPropsRU = {
  link_1: 'Как пользоваться?',
  link_2: 'Мои записи',
  link_3: 'Записаться к врачу',
};
let headerListPropsEN = {
  link_1: 'How to use?',
  link_2: 'My notes',
  link_3: 'Make an appointment',
};

let userName = {
  name: 'David Gharibyan',
};

let menuDataRU = [
  { icon: userIcon, text: 'Мой профиль' },
  { icon: balanceIcon, text: 'Пополнить баланс' },
  { icon: helpIcon, text: 'FAQ' },
  { icon: logOutIcon, text: 'Выйти' },
];
let menuDataEN = [
  { icon: userIcon, text: 'My profile' },
  { icon: balanceIcon, text: 'Top up balance' },
  { icon: helpIcon, text: 'FAQ' },
  { icon: logOutIcon, text: 'Log Out' },
];

export { headerListPropsRU, headerListPropsEN, userName, menuDataRU, menuDataEN };
