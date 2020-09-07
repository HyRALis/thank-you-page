import styles from "../styles/BackHomepage.module.scss";

const BackHomepage = ({ label }) => {
  return <button className={styles.container}>{label}</button>;
};

export default BackHomepage;
