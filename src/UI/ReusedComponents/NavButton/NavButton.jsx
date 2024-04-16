import { useEffect, useRef, useState } from "react";
import { useHref, useNavigate } from "react-router-dom";
import styles from "./NavButton.module.scss";
import { basePatchPrefix } from "../../../const/const";

export const NavButton = ({
  textContent,
  setSelectedButton,
  selectedButton,
}) => {
  const buttonRef = useRef(null);
  const path = useHref();

  const [isHover, setIsHover] = useState(false);
  const [currentTextContent, setcurrentTextContent] = useState("");

  const convertToParam = (str) => {
    return str.split(" ").join("").toLowerCase();
  };

  const getPath = () => {};

  useEffect(() => {
    setcurrentTextContent(buttonRef.current.textContent);
    console.log(buttonRef.current.textContent);
    setSelectedButton(getPath());
  }, []);
  const navigate = useNavigate();
  return (
    <form
      ref={buttonRef}
      onSubmit={(e) => {
        e.preventDefault();
        setcurrentTextContent(e.target.textContent.toLowerCase());
        setSelectedButton(e.target.textContent.toLowerCase());
        navigate(`${basePatchPrefix}${convertToParam(e.target.textContent)}`);
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
          setcurrentTextContent(buttonRef.current.textContent);
          setSelectedButton(buttonRef.current.textContent);

          navigate(
            `${basePatchPrefix}${convertToParam(buttonRef.current.textContent)}`,
          );
        }}
        className={`${styles.underline} ${
          isHover && selectedButton !== currentTextContent ? styles.hover : ""
        } ${selectedButton === currentTextContent ? styles.clicked : ""}`}
      />
    </form>
  );
};
