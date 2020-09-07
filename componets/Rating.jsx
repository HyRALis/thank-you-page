import React from "react";
import Star from "../public/assets/icons/other/star.svg";

import styles from "../styles/Rating.module.scss";

const Rating = ({ Rating, Fill, Color }) => {
  return (
    <div className={styles.container} style={{ color: Color }}>
      <div className={styles.klantescore}>
        <span>
          Klantenscore <strong>{Rating}</strong>
        </span>
      </div>
      <div className={styles.trustpilot} style={{ color: Color }}>
        <Star fill={Fill} />
        <Star fill={Fill} />
        <Star fill={Fill} />
        <Star fill={Fill} />
        <Star fill={Fill} />
        <span>Trustpilot</span>
      </div>
    </div>
  );
};

export default Rating;
