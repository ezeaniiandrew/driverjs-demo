import styles from "./footer.module.css";

function Footer() {
  return (
    <div id="footer">
      <p className={styles.footer}>
        Design gotten from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
          target="_blank"
          rel="noreferrer"
        >
          frontendMentor
        </a>
      </p>
    </div>
  );
}

export default Footer;
