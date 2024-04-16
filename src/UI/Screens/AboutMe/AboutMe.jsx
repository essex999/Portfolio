import IconReact from "../../ReusedComponents/Icons/ReactIcon";
import IconSass from "../../ReusedComponents/Icons/IconSass";

import styles from "./AboutMe.module.scss";
import IconJavascript from "../../ReusedComponents/Icons/JavaScriptIcon";
import IconHtml from "../../ReusedComponents/Icons/HtmlIcon";
import IconAxios from "../../ReusedComponents/Icons/AxiosIcon";
import ReduxIcon from "../../ReusedComponents/Icons/ReduxIcon";
import ReactQueryIcon from "../../ReusedComponents/Icons/ReactQueryIcon";
import NodeJsIcon from "../../ReusedComponents/Icons/NodeJsIcon";

export const AboutMe = () => {
  const aboutMeQualities =
    "I am a creative and determined web developer with a keen eye for detail and a drive for excellence. My creative thinking enables me to find innovative and efficient solutions to complex problems. I possess excellent communication skills and the ability to work effectively in teams, allowing me to collaborate seamlessly with colleagues and clients. My ability to learn quickly and adapt to new technologies helps me stay abreast of the latest trends in web development. I am confident that my personal qualities make me not only a competent professional but also a valuable member of any team.";
  const aboutMeTextContent =
    "Hi , i am Octavian , year and a half ago, i embarked on my journey into web development by enrolling in Skypro school. Since then, I’ve been actively expanding my knowledge, self-learning various technologies. My toolkit includes HTML, CSS, SCSS, JavaScript, along with libraries and frameworks such as React.js, Axios, Redux, and React Query. I have experience in developing single-page applications, available on my GitHub page. Additionally, I’ve worked with databases, creating them using Node.js, Express.js, and MongoDB. I’m passionately dedicated to crafting high-quality web projects and continuously strive to enhance my skills.";
  return (
    <>
      <div className={styles.textContainer}>
        <p className={styles.textContent}>{aboutMeTextContent}</p>
        <div className={styles.inconsGroup}>
          <IconReact className={styles.icon} />
          <IconHtml className={styles.icon} />
          <IconSass className={styles.icon} />
          <IconJavascript className={styles.icon} />
          <IconAxios className={styles.icon} />
          <ReduxIcon className={styles.icon} />
          <ReactQueryIcon className={styles.icon} />
          <NodeJsIcon className={styles.icon} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.textContent}>{aboutMeQualities}</p>
      </div>
    </>
  );
};
