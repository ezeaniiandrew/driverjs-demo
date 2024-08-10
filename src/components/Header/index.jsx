import styles from "./header.module.css";
import sunIcon from "../../assets/icon-sun.svg";
import moonIcon from "../../assets/icon-moon.svg";
import { useTheme } from "../../context";
import Button from "../Button";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <Button
        id="toggle-theme"
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      >
        <img
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="An icon of the sun"
        />
      </Button>
    </header>
  );
}

export default Header;
