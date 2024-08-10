import { useState, useSyncExternalStore } from "react";
import { getSnapshots, subscribe } from "../../store";
import TodoItem from "../TodoItem";
import BottomTab from "../BottomTab";
import styles from "./todo-list.module.css";

function TaskList() {
  const todos = useSyncExternalStore(subscribe, getSnapshots);
  const [activeTab, setActiveTab] = useState("all");

  const getCurrentTabTodos = (tab) => {
    switch (tab) {
      case "active":
        return todos.filter((todo) => todo.status !== "completed");

      case "completed":
        return todos.filter((todo) => todo.status !== "active");

      default:
        return todos;
    }
  };

  const currentTabTodos = getCurrentTabTodos(activeTab);

  return (
    <section className={styles.box}>
      <ul>
        {currentTabTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <BottomTab
        numOfActiveTodos={
          todos.filter((todo) => todo.status === "active").length
        }
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    </section>
  );
}

export default TaskList;
