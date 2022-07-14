import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import covid from "./img/image.png";

const App = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid} alt="covid-19" />
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
