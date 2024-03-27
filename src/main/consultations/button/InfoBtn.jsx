import './InfoBtn.css';
export default function InfoBtn(props) {
  return (
    <>
      <button className={props.className}>{props.btnName}</button>
    </>
  );
}
