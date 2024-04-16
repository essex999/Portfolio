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

  const convertStr = (str) => {
    if (str === "/Portfolio/") {
      return "aboutme";
    } else
      return str
        .toLowerCase()
        .split("/")
        .slice(-1)
        .join("")
        .split(" ")
        .join("");
  };

  useEffect(() => {
    setcurrentTextContent(convertStr(buttonRef.current.textContent));

    setSelectedButton(convertStr(path));
  }, [path, selectedButton, setSelectedButton]);
  const navigate = useNavigate();
  return (
    <form
      ref={buttonRef}
      onSubmit={(e) => {
        e.preventDefault();
        setcurrentTextContent(convertStr(e.target.textContent));
        setSelectedButton(convertStr(e.target.textContent));
        navigate(`${basePatchPrefix}${convertStr(e.target.textContent)}`);
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
          setcurrentTextContent(convertStr(buttonRef.current.textContent));
          setSelectedButton(convertStr(buttonRef.current.textContent));
          navigate(
            `${basePatchPrefix}${convertStr(buttonRef.current.textContent)}`,
          );
        }}
        className={`${styles.underline} ${
          isHover && selectedButton !== currentTextContent ? styles.hover : ""
        } ${selectedButton === currentTextContent ? styles.clicked : ""}`}
      />
    </form>
  );
};
