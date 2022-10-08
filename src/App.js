import { useState } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [toDo, settoDo] = useState("");
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => {
    settoDo(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(toDo);
    settoDo("");
    settoDos((nowArray) => [toDo, ...nowArray]);
    console.log(event);
  };

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
            <button key={index} onClick={handleButtonClick}>
              <li key={index}>{todo}</li>
            </button>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
