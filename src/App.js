import { useState } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";

function App() {
  const [toDo, settoDo] = useState("");
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => {
    settoDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    settoDo("");
    settoDos((nowArray) => [toDo, ...nowArray]);
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
        <Button text={toDo} />
        <hr></hr>
        <ul>
          {toDos.map((todo, index) => (
            <button>
              📌
              <li key={index}>{todo}</li>
            </button>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
