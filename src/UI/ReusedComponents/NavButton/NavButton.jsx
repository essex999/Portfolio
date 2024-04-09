import { useRef, useState } from "react";
import styles from "./NavButton.module.scss";
import { useNavigate, useSubmit } from "react-router-dom";

export const NavButton = ({
  textContent,
  setSelectedButton,
  selectedButton,
}) => {
  const buttonRef = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const [currentTextContent, setcurrentTextContent] = useState("");

  const convertToParam = (str) => {
    return str.split(" ").join("").toLowerCase();
  };

  const navigate = useNavigate();
  return (
    <form
      ref={buttonRef}
      onSubmit={(e) => {
        e.preventDefault();
        setcurrentTextContent(e.target.textContent);
        setSelectedButton(e.target.textContent);
        navigate(`/${convertToParam(e.target.textContent)}`);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={styles.navButtonGroup}
    >
      <button className={styles.navButton}>{textContent}</button>

      <div
        onClick={() => {
          console.log(buttonRef.current.textContent);

          setcurrentTextContent(buttonRef.current.textContent);
          setSelectedButton(buttonRef.current.textContent);
          navigate(`/${convertToParam(buttonRef.current.textContent)}`);
        }}
        className={`${styles.underline} ${
          isHover && selectedButton !== currentTextContent ? styles.hover : ""
        } ${selectedButton === currentTextContent ? styles.clicked : ""}`}
      />
    </form>
  );
};
