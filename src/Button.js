import { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Button() {
  const [todoSpan, setSpanList] = useState([]);

  const Span = () => {
    return <span />;
  };

  const onAddBtnClick = (event) => {
    setSpanList(todoSpan.concat(<Span key={todoSpan.length} />));
  };
  return <button onClick={onAddBtnClick}>Add</button>;
}

export default Button;
