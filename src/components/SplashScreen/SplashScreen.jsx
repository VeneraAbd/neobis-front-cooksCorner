import styles from "./SplashScreen.module.css";
import React, { useState, useEffect } from 'react';
import splashscreen from "../../assets/splashscreen.svg";

const SplashScreen = () => {

  return (
    <div className={styles.splash_screen}>
      <div className={styles.container}>
        <img className={styles.logo} src={splashscreen} alt="Cooks corner splash screen logo" />
      </div>
      <p className={styles.version}>Version 0.0.1</p>
    </div>
  );
};

export default SplashScreen;
