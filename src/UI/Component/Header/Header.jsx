import { useEffect, useState } from "react";
import avatar from "../../../assets/neva-masquerade-royalty-free-image-1674509896.jpg";
import IconFacebook from "../../ReusedComponents/Icons/FbIcon";
import IconGithub from "../../ReusedComponents/Icons/GitIcon";
import IconTelegram from "../../ReusedComponents/Icons/TelegramIcon";

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export const Header = () => {
  const telegramLink = "https://t.me/ixt13";
  const gitLink = "https://github.com/essex999";
  const faceBookLink = "https://www.facebook.com/okch97";
  const [isClasss, setIsClass] = useState(null);

  const [isShowMobileHeader, setShowMobileHeader] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth <= 550) {
      setShowMobileHeader(true);
    } else setShowMobileHeader(false);
  }, [windowWidth]);

  return (
    <>
      {isShowMobileHeader ? (
        <div className={styles.header}>
          <img className={styles.img} src={avatar} />

          <div className={styles.headerAdditionalInfo}>
            <div className={styles.basicUserInfo}>
              <h1 className={styles.text}>xxxxx xxxxxxx</h1>
              <h2 className={styles.text}>Web Developer</h2>
            </div>
            <div className={styles.socialsContainer}>
              <Link to={faceBookLink} target="_blank" rel="noopener noreferrer">
                <IconFacebook className={styles.icon} />
              </Link>
              <Link to={gitLink} target="_blank" rel="noopener noreferrer">
                <IconGithub className={styles.icon} />
              </Link>
              <Link to={telegramLink} target="_blank" rel="noopener noreferrer">
                <IconTelegram className={styles.icon} />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.header}>
          <div className={`${styles.basicUserInfo} ${styles.visible}`}>
            <h1 className={styles.text}>xxxxx xxxxxxx</h1>
            <h2 className={styles.text}>Web Developer</h2>
          </div>
          <img className={styles.img} src={avatar} />
          <div className={`${styles.socialsContainer} ${styles.visible}`}>
            <Link to={faceBookLink} target="_blank" rel="noopener noreferrer">
              <IconFacebook className={styles.icon} />
            </Link>
            <Link to={gitLink} target="_blank" rel="noopener noreferrer">
              <IconGithub className={styles.icon} />
            </Link>
            <Link to={telegramLink} target="_blank" rel="noopener noreferrer">
              <IconTelegram className={styles.icon} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
