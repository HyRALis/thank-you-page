import Rating from "./Rating";

import styles from "../styles/Footer.module.scss";

const Footer = ({ StaticText, Language }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ratingContainer}>
        <hr />
        <Rating Rating={9.3} Color="#FFFFFF" Fill="#FFFFFF" />
        <hr />
      </div>
      <div className={styles.service}>
        <img
          src="/assets/images/logos/footerLogo.jpeg"
          alt="Logo Visa Service Desk Footer"
        />
        <p>© copyright 2019</p>
        <a href="#">{StaticText[Language].footerOne}</a>
        <a href="#">{StaticText[Language].footerTwo}</a>
      </div>
    </footer>
  );
};

export default Footer;
