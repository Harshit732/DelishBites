import React from 'react';
import styles from '../styles/Footer.module.css'; 

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing fresh and flavorful meals to our customers, prepared with high-quality ingredients by our talented chefs. Our commitment to exceptional service and a welcoming atmosphere makes us the perfect choice for dining with friends and family.
        </p>
      </div>

      <div className={styles.footerSection}>
        <h2>Contact Us</h2>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: +91 99999 99999</p>
        <p>Address: 1234 xyz, abc</p>
      </div>
    </footer>
  );
}

export default Footer;
