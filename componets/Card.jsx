import SvgOne from "../public/assets/icons/cards/flight.svg";
import SvgTwo from "../public/assets/icons/cards/mail.svg";
import SvgThree from "../public/assets/icons/cards/approve-invoice.svg";
import SvgFour from "../public/assets/icons/cards/recycle.svg";
import SvgFive from "../public/assets/icons/cards/passport.svg";
import SvgSix from "../public/assets/icons/cards/laptop.svg";

import styles from "../styles/Card.module.scss";

const Card = ({ Content, Index, children }) => {
  const svgArray = [SvgOne, SvgTwo, SvgThree, SvgFour, SvgFive, SvgSix];

  const CustomTag = { Tag: svgArray[Index] };

  return (
    <div className={styles.card}>
      <div className={styles.outerRing}>
        <div className={styles.badge}>
          <p>{Index + 1}</p>
        </div>
      </div>
      <CustomTag.Tag />
      <p className={styles.content}>{Content}</p>
    </div>
  );
};

export default Card;
