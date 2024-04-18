import styles from "./Resume.module.scss";

export const Resume = () => {
  return (
    <>
      <div className={styles.textContainer}>
        <div className={styles.sticker}>
          <p className={styles.stickerText}>Education</p>
        </div>
        <p className={styles.textContent}>
          College of Microelectronics and Computerized Engineering 2013-2017
        </p>
        <p className={styles.textContent}>Speciality: Telecommunications</p>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.sticker}>
          <p className={styles.stickerText}>Work Experience</p>
        </div>
        <p className={styles.textContent}>{"aboutMeTextContent"}</p>
      </div>
    </>
  );
};
