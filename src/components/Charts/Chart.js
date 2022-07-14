import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "../../redux/thunk/thunk";

const Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  const dailyData = useSelector((state) => state.chartReducer.chart);

  const { dataGeneral, pickedCountry } = useSelector((state) => ({
    dataGeneral: state.cardReducer.cards,
    pickedCountry: state.counrtyPickerReducer.pickedCountry,
  }));

  const dataLineChart = {
    labels: dailyData && dailyData.map(({ date }) => date), //map that returns an array of all of the dates
    datasets: [
      {
        data: dailyData && dailyData.map(({ confirmed }) => confirmed),
        label: "Confirmed",
        borderColor: "#3333ff",
        fill: true,
      },
      {
        data: dailyData && dailyData.map(({ deaths }) => deaths),
        label: "Deaths",
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
      },
    ],
  };

  const dataBarChart = {
    labels: dataGeneral && dataGeneral.map((data) => data.title),
    datasets: [
      {
        label: "People",
        backgroundColor: [
          "rgba(0, 0, 255, 0.5)",
          "rgba(255,0, 0, 0.5)",
          "rgba(0, 255, 0, 0.5)",
        ],
        data: dataGeneral && dataGeneral.map((data) => data.cases),
      },
    ],
  };

  const optionsBarChart = {
    legend: { display: false },
    title: { display: true, text: `Current state in ${pickedCountry}` },
  };

  return (
    <div className={styles.container}>
      {pickedCountry ? (
        <Bar data={dataBarChart} options={optionsBarChart} />
      ) : (
        <Line data={dataLineChart} />
      )}
    </div>
  );
};

export default Chart;
