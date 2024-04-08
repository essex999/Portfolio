import catImage from "../../../assets/neva-masquerade-royalty-free-image-1674509896.jpg";
import styles from "./MainPage.module.scss";
import { NavBar } from "./NavBar/NavBar";
export const MainPage = ({ childComponent: ChildComponent }) => {
  const navButtons = ["About me", "Resume", "Portfolio", "Blog", "Contact"];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.basicUserInfo}>
          <h1 className={styles.textWrap}>Cxxx</h1>
          <h2>Web Developer</h2>
        </div>
        <img className={styles.img} src={catImage} />
      </div>
      <div className={styles.page}>
        <NavBar navButtons={navButtons} />
        <main className={styles.mainContainer}>
          <ChildComponent />
        </main>
      </div>
    </div>
  );
};
