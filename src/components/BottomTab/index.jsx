import Button from "../Button";
import styles from "./bottom-tab.module.css";
import { clearCompletedTodos } from "../../store";

function BottomTab({ numOfActiveTodos, onTabChange, activeTab }) {
  return (
    <div className={styles.box}>
      <p>{`${numOfActiveTodos} item${
        numOfActiveTodos > 1 ? "s" : ""
      } left`}</p>
      <div>
        <Button
          style={{
            color: activeTab === "all" ? "var(--active-btn-color)" : null,
          }}
          onClick={() => onTabChange("all")}
        >
          All
        </Button>
        <Button
          style={{
            color: activeTab === "active" ? "var(--active-btn-color)" : null,
          }}
          onClick={() => onTabChange("active")}
        >
          Active
        </Button>
        <Button
          style={{
            color: activeTab === "completed" ? "var(--active-btn-color)" : null,
          }}
          onClick={() => onTabChange("completed")}
        >
          Completed
        </Button>
      </div>
      <Button
        className={styles.clearBtn}
        onClick={() => clearCompletedTodos()}
      >
        Clear completed
      </Button>
    </div>
  );
}

export default BottomTab;
