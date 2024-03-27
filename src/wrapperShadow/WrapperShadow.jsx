import './wrapperShadow.css';
export default function WrapperShadow(props) {
  return <div className="shadow">{props.children}</div>;
}
