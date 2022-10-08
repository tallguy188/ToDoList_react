import { useRef, useState } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [toDo, settoDo] = useState("");
  const [toDos, settoDos] = useState([
    {
      id: 1,
      text: "todo 만들기",
    },
  ]);
  const onChange = (event) => {
    settoDo(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    settoDos([
      ...toDos,
      {
        id: toDos[toDos.length - 1].id + 1,
        text: toDo,
      },
    ]);
    settoDo("");
    console.log(toDos);
  };

  /* const onClear = (event) => {}; */

  return (
    <div>
      <h1>My to do list</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="put your to do list"
        ></input>
        <Button />
        <hr></hr>
        <ul>
          {toDos.map((todo, index) => (
            <li key={index}>
              <button onClick={handleButtonClick}>📌</button>
              <button key={index} onClick={handleButtonClick}>
                {todo.text}
              </button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
