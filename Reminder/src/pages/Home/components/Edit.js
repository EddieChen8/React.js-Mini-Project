import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addNote = (event) => {
    setNote(event.target.value);
  };
  const addDate = (event) => {
    setDate(event.target.value);
  };
  const addTime = (event) => {
    setTime(event.target.value);
  };

  const addItem = () => {
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  };
  return (
    <div>
      <h1>Reminder</h1>

      <p>Tasks</p>
      <input value={note} onChange={addNote} type="text"></input>
      <p>Date</p>
      <input value={date} onChange={addDate} type="date"></input>
      <p>Time</p>
      <input value={time} onChange={addTime} type="time"></input>
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};
export default Edit;
