import React from 'react';
import Card from '../components/Card';
import cake from "../asset/cake.jpeg";
import ChickenCurry from "../asset/chickencurry.jpg";
import Fishfry from "../asset/fish.jpg";
import Jalebi from "../asset/jalebi.jpeg";
import Kulche from "../asset/kulche.jpeg";
import Paneertikka from "../asset/paneertika.jpeg";
import Panipuri from "../asset/panipuri.jpeg";
import Pav from "../asset/pav.jpeg";
import Pizza from "../asset/pizza.jpeg";
import Rice from "../asset/rice.jpeg";
import Samosa from "../asset/samose.jpeg";
import Butterchicken from "../asset/butterchicken.jpg";
import Thali from "../asset/thali.png";
import chickenSalad from "../asset/vegetableChickenSalad.jpg";
import vegsalad from "../asset/VegSalad.jpg";
import styles from '../styles/foodmenu.module.css'; // Import CSS module

function FoodMenu() {
  const menu = [
    { name: "Cake", imagesrc: cake },
    { name: "Chicken Curry", imagesrc: ChickenCurry },
    { name: "Fish Fry", imagesrc: Fishfry },
    { name: "Jalebi", imagesrc: Jalebi },
    { name: "Kulche", imagesrc: Kulche },
    { name: "Paneer Tikka", imagesrc: Paneertikka },
    { name: "Pani Puri", imagesrc: Panipuri },
    { name: "Pav Bhaji", imagesrc: Pav },
    { name: "Pizza", imagesrc: Pizza },
    { name: "Rice", imagesrc: Rice },
    { name: "Samosa", imagesrc: Samosa }
  ];

  const chefsSpecial = [
    { name: "Butter Chicken", imagesrc: Butterchicken },
    { name: "Special Thali", imagesrc: Thali },
    { name: "Chicken Salad", imagesrc: chickenSalad },
    { name: "Fish", imagesrc: Fishfry },
    { name: "Veg Salad", imagesrc: vegsalad }
  ];

  return (
    <div className={styles.foodMenuContainer}>
      <h1>Menu</h1>
      <div className={styles.menuGrid}>
        {menu.map((item, index) => (
          <Card key={index} image={item.imagesrc} title={item.name} />
        ))}
      </div>

      <h1>Chef's Special</h1>
      <div className={styles.menuGrid}>
        {chefsSpecial.map((item, index) => (
          <Card key={index} image={item.imagesrc} title={item.name} />
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
