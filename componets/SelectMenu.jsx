import NL from "../public/assets/icons/flags/nlFlag.svg";
import MK from "../public/assets/icons/flags/mkFlag.svg";
import US from "../public/assets/icons/flags/usaFlag.svg";

import styles from "../styles/Select.module.scss";

const Select = () => {
  return (
    <div className={styles.selectBox}>
      <div className={styles.optionsContainer}>
        <div className={styles.option}>
          <input
            type="radio"
            className={styles.radio}
            id="nl"
            name="language"
          />
          <label htmlFor="nl">
            <NL />
          </label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            className={styles.radio}
            id="enUS"
            name="language"
          />
          <label htmlFor="enUS">
            <US />
          </label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            className={styles.radio}
            id="mk"
            name="language"
          />
          <label htmlFor="mk">
            <MK />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Select;
