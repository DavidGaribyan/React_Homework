import './NotesCard.css';

export default function NotesCard({ user }) {
  return (
    <>
      <div className="notes__wrap">
        {user.map((item, index) => {
          return (
            <div className="notesCard__wrapper" key={index}>
              <div className="notesCard__info">
                <div className="notesCard__date-info">
                  <img alt="icon" src={item.calendar} />
                  <p className="notesCard__date">{item.date} </p>
                  <img alt="icon" src={item.clock} />
                  <p className="notesCard__date">{item.hour}</p>
                  <img alt="icon" src={item.camera} />
                  <p className="notesCard__date">{item.connection}</p>
                </div>
                <p className={item.conditionCheck === '2' ? 'notesCard__condition-green' : item.conditionCheck === '1' ? 'notesCard__condition-yellow' : 'notesCard__condition-red'}>{item.condition}</p>
              </div>
              <div className="notesCard__main">
                <div className="notesCard__user-info">
                  <img alt="avatar" src={item.avatar} />
                  <div className="user__info">
                    <p className="user__name">{item.doctorName}</p>
                    <p className="user__staff">{item.staff}</p>
                    <p className="user__stage">{item.stage}</p>
                  </div>
                </div>
                <div className="notesCard__btns">
                  <button className="look__notes">{item.btn_1}</button>
                  <button className="look__order">{item.btn_2}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
