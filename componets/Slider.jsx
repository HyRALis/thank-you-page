import { useState, useEffect } from "react";

import Slide from "./Slide";
import CheckBox from "../public/assets/icons/other/checkbox.svg";
import Translations from "../public/assets/translations.json";
import styles from "../styles/Slider.module.scss";

const Slider = ({ Language, StaticText }) => {
  const [images, setImages] = useState([
    "/assets/images/slides/landscape1.jpg",
    "/assets/images/slides/landscape2.jpg",
    "/assets/images/slides/landscape3.jpg",
    "/assets/images/slides/landscape4.jpg",
    "/assets/images/slides/landscape5.jpg",
  ]);
  const [slideNo, setSlideNo] = useState(0);

  const increment = (slideNo, array) => {
    const slideNumber = Math.abs(slideNo);
    let slideParam = slideNo;
    if (slideNumber < array.length - 1) {
      slideParam += 1;
      setSlideNo(slideParam);
    } else if (slideNumber === array.length - 1) {
      slideParam = 0;
      setSlideNo(slideParam);
    }
  };

  const decrement = (slideNo, array) => {
    let slideNumber = Math.abs(slideNo);
    let slideParam = slideNo;
    if (slideNumber < array.length - 1) {
      slideParam -= 1;
      setSlideNo(slideParam);
    } else if (slideNumber === array.length - 1) {
      slideParam = 0;
      setSlideNo(slideParam);
    }
  };

  const caroselCss = (slideNo) => {
    let translate = 0;
    translate = slideNo * 100;
    return translate;
  };

  useEffect(() => {
    setTimeout(() => {
      decrement(slideNo, images);
    }, 4000);
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      decrement(slideNo, images);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [decrement, slideNo, images]);

  return (
    <section className={styles.container}>
      {images.map((image, index) => (
        <Slide
          key={index}
          Content={image}
          CaroselCss={caroselCss}
          ID={`image${index}`}
          SlideNo={slideNo}
        />
      ))}
      <div className={styles.thankYou}>
        <div>
          <CheckBox />
          <h1>{StaticText[Language].note}</h1>
        </div>
        <h3>{StaticText[Language].confirmation}</h3>
      </div>
    </section>
  );
};

export default Slider;
