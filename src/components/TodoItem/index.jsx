import Checkbox from "../Checkbox";
import styles from "./todo-item.module.css";
import cancelIcon from "../../assets/icon-cross.svg";
import { deleteTodo, toggleTodoStatus } from "../../store";

function TodoItem({ todo }) {
  const { title, status, id } = todo;

  return (
    <li className={styles.task}>
      <Checkbox status={status} onChange={() => toggleTodoStatus(id)} />
      <p className={status === "completed" ? styles.done : null}>{title}</p>
      <img src={cancelIcon} onClick={() => deleteTodo(id)} alt="" />
    </li>
  );
}

export default TodoItem;
