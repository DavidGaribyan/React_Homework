import { Link } from 'react-router-dom';
import bookDocImg from './bookDocimg.png';
import './bookDoctor.css';
export default function BookDoctor({ initial }) {
  let languageContent = initial;
  return (
    <>
      <div className="book__wrapper">
        <img className="book__img" src={bookDocImg} alt="img"></img>
        <div>
          <h3 className="book__heading">{languageContent.bookHeading}</h3>
          <p className="book__text">{languageContent.bookText} </p>
          <ul className="book__list">
            <li>{languageContent.bookListItem_1}</li>
            <li>{languageContent.bookListItem_2}</li>
            <li>{languageContent.bookListItem_3}</li>
          </ul>
          <button className="book__btn">{languageContent.bookBtn}</button>
        </div>
      </div>
      <Link to="/myNotes" className="myBooks__btn">
        {languageContent.myBooks}
      </Link>
    </>
  );
}
