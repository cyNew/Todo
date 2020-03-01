import React from "react";
import { ReactComponent as Del } from "../../asserts/delete.svg";

enum Status {
  y = "Y",
  n = "N"
}
interface Props {
  _id: number;
  todo: string;
  completed: Status;
  handleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
}
const TodoItem: React.FC<Props> = ({
  _id,
  todo,
  completed,
  handleComplete,
  handleDelete
}) => {
  const checked = completed === "Y" ? true : false;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        defaultChecked={checked}
        onClick={() => handleComplete(_id)}
      />
      <span
        style={{
          textDecorationLine: completed === "Y" ? "line-through" : "none"
        }}
      >
        {todo}
      </span>
      <span className="icons todo-del" onClick={() => handleDelete(_id)}>
        <Del />
      </span>
    </li>
  );
};

export default TodoItem;
