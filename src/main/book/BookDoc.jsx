import bookDocImg from './bookDocimg.png';
import './bookDoctor.css';
export default function BookDoctor(props) {
  return (
    <>
      <div className="book__wrapper">
        <img className="book__img" src={bookDocImg} alt="img"></img>
        <div>
          <h3 className="book__heading">{props.bookHeading}</h3>
          <p className="book__text">{props.bookText} </p>
          <ul className="book__list">
            <li>{props.bookListItem_1}</li>
            <li>{props.bookListItem_2}</li>
            <li>{props.bookListItem_3}</li>
          </ul>
          <button className="book__btn">{props.bookBtn}</button>
        </div>
      </div>
      <button className="myBooks__btn">{props.myBooks}</button>
    </>
  );
}
