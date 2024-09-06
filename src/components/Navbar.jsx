import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbody}>
        <div className={styles.logo}>"DelishBites"</div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>

        {/* Ensure the 'active' class is conditionally applied */}
        <div className={`${styles.hlinks} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
