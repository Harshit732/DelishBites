import React, { useState } from "react";
import styles from "../styles/hero.module.css";
import thali from "../asset/thali.png";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div style={{ display: "flex" }}>
            <h1 className={styles.welcome} style={{ color: "whitesmoke" }}>Welcome to &nbsp;</h1>
            <h1 style={{ color: "orangered" }}>"DelishBites"</h1>
          </div>

          <p>Your journey to deliciousness starts here.</p>

          <button className={styles.ordernow} onClick={handleButtonClick}>
            Order Now
          </button>
        </div>
        <div className={styles.thali}>
          <img src={thali} alt="thali" />
        </div>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <form className={styles.orderForm}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleCloseForm}
            >
              &times;
            </button>
            <h2>Place Your Order</h2>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              What you like to eat:
              <input type="text" name="dish" required />
            </label>
            <label>
              Address:
              <input type="text" name="address" required />
            </label>
            <label>
              Quantity:
              <input type="number" name="quantity" min="1" required />
            </label>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hero;
