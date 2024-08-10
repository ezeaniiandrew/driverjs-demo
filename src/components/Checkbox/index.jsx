import styles from "./checkbox.module.css";

function Checkbox({ status, ...props }) {
  return (
    <label htmlFor="task status" className={styles.label}>
      <input
        className={styles.check}
        type="checkbox"
        checked={status === "completed"}
        id="task status"
        {...props}
      />
      <div className={styles[status]}></div>
    </label>
  );
}

export default Checkbox;
