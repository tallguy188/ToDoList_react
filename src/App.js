import { useState } from "react";

function App() {
  const [toDo, settoDo] = useState("");

  const onChange = (event) => {
    settoDo(event.target.value);
    console.log(toDo);
  };

  return (
    <div>
      <h1>My to do list</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="put your to do list"
        ></input>
      </form>
    </div>
  );
}

export default App;
