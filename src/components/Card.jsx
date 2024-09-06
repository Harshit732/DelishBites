import React from 'react';
import styles from '../styles/Card.module.css'; 

const Card = ({ image, title }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <h2 className={styles.cardTitle}>{title}</h2>
    </div>
  );
};

export default Card;
