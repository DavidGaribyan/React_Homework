import './notification.css';
import notIcon from './notification.png';
export default function Notification(props) {
  return (
    <>
      <img className="not__icon" src={notIcon} alt="icon" />
      <div className="not__round">
        <span className="not__number">{props.notCount}</span>
      </div>
    </>
  );
}
