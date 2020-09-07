import { useEffect } from "react";

import styles from "../styles/Slide.module.scss";

const Slide = ({ Content, CaroselCss, ID, SlideNo }) => {
  //   useEffect(() => {
  //     document.getElementById(
  //       `${ID}`
  //     ).style.backgroundImage = `url("${Content}")`;
  //   }, [Content]);

  return (
    <div
      className={styles.slide}
      style={{
        transform: `translateX(${CaroselCss(SlideNo)}%)`,
      }}
    >
      <img src={Content} alt="landscape" />
      <div className={styles.tint}></div>
    </div>
  );
};

export default Slide;
