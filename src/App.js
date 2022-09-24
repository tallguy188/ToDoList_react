import { useState } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";

function App() {
  const [toDo, settoDo] = useState("");

  const onChange = (event) => {
    settoDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    settoDo("");
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

        <ul></ul>
      </form>
    </div>
  );
}

export default App;
