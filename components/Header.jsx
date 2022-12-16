import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>KryptoCeny - Aktualne kursy kryptowalut</h1>

        <p>Witamy! Portal obecnie jest w wersji Beta.</p>
      </div>
    </div>
  );
}

export default Header;
