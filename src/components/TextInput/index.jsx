import { useState } from "react";
import { addTodo } from "../../store";
import styles from "./text-input.module.css";

let taskId = 3;

function TextInput() {
  const [inputValue, setInputValue] = useState("");

  const createNewTask = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }

    addTodo({
      id: taskId++,
      title: inputValue,
      status: "active",
    });

    setInputValue("");
  };

  return (
    <form onSubmit={(e) => createNewTask(e)}>
      <label htmlFor="text-input" className={styles.label}>
        <input
          type="text"
          id="text-input"
          name="text-input"
          placeholder="Create a new todo..."
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className={styles.circle}></span>
      </label>
    </form>
  );
}

export default TextInput;
