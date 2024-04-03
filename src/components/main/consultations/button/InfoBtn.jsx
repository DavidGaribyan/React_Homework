import { Link } from 'react-router-dom';
import './InfoBtn.css';
export default function InfoBtn(props) {
  return (
    <>
      <Link to="/sada" className={props.className}>
        {props.btnName}
      </Link>
    </>
  );
}
