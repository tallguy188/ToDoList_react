import { useState } from "react";
import Button from "./Button";
import Trash from "./Trash";
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
  const [trash, setTrash] = useState("");
  const [todoTrash, settodoTrash] = useState([
    {
      id: 1,
      text: "",
    },
  ]);

  const onChange = (event) => {
    settoDo(event.target.value);
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
  };

  const onRemove = (id) => {
    settoDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
    setTrash((toDos) => toDos.filter((toDo) => toDo.id === id));
  };

  return (
    <div className="all">
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
      </form>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            <button key={index} onClick={() => onRemove(todo.id)}>
              <span role="img" aria-label="pin">
                📌
              </span>
              {todo.text}
            </button>
          </li>
        ))}
      </ul>
      <Trash settodoTrash={settodoTrash} todotrash={todoTrash} />
    </div>
  );
}

export default App;
