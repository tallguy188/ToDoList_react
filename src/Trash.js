import { useState } from "react";
import "./Trash.css";
function Trash({ setTrash, trash }) {
  return (
    <div className="can">
      <span className="canimg" role="img" aria-label="trash">
        🗑
      </span>
      <div>
        <ul>
          {trash.map((todo, index) => (
            <li key={index}>
              <button key={index}>{todo.text}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trash;
