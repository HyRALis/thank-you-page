import Select from "react-select";

import NL from "../public/assets/icons/flags/nlFlag.svg";
import MK from "../public/assets/icons/flags/mkFlag.svg";
import US from "../public/assets/icons/flags/usaFlag.svg";
import Search from "../public/assets/icons/other/search.svg";
import Hamburger from "../public/assets/icons/other/open-menu.svg";

import styles from "../styles/Navbar.module.scss";

const Navbar = ({ SetLanguage }) => {
  const options = [
    { label: <NL />, value: "nl" },
    { label: <US />, value: "enUS" },
    { label: <MK />, value: "mk" },
  ];

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      margin: "0 1.5rem 0 1.5rem",
      cursor: "pointer",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      width: "4.625rem",
      height: "4.125rem",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      width: "3.625rem",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      width: "3.875rem",
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    }),
  };

  return (
    <nav className={styles.nav}>
      <img
        src="/assets/images/logos/navlogo.jpeg"
        alt="Visa Service Desk Logo"
      />
      <div className={styles.navElements}>
        <button aria-label="Search" className={styles.searchButton}>
          <Search />
        </button>
        <Select
          styles={customStyles}
          defaultValue={options[0]}
          name="Languages"
          options={options}
          autoFocus
          onChange={SetLanguage}
          isSearchable={false}
        />
        <Hamburger />
      </div>
    </nav>
  );
};
export default Navbar;
