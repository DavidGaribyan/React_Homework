import { Link } from 'react-router-dom';
import WrapperMain from '../../components/wrapperMain/WrapperMain';
import './pageNotFound.css';
export default function PageNotFound({ initial }) {
  const pageNotFoundLang = initial;
  return (
    <>
      <WrapperMain>
        <div className="page404__wrap">
          <h1 className="page404__heading">404</h1>
          <p className="page404__text">{pageNotFoundLang.pageNotFoundText_1}</p>
          <p className="page404__text-home">{pageNotFoundLang.pageNotFoundText_2}</p>
          <Link to="/" class="page404__btn">
            {pageNotFoundLang.pageNotFoundBtn}
          </Link>
        </div>
      </WrapperMain>
    </>
  );
}
