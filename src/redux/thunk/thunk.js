import { getCards, getCountries, getChart } from "../actions/actions";
import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";

export const getChartData = () => {
  return (dispatch) => {
    const data = axios.get(`${API_URL}/daily`);
    data
      .then((data) => {
        const dataArr = data.data.map((item) => ({
          confirmed: item.confirmed.total,
          deaths: item.deaths.total,
          date: item.reportDate,
        }));

        dispatch(getChart(dataArr));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const getCountryData = () => {
  return (dispatch) => {
    const data = axios.get(`${API_URL}/countries`);
    data
      .then((data) => {
        const countryNames = data.data.countries.map((country) => country.name);

        dispatch(getCountries(countryNames));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getData = (country) => {
  return (dispatch) => {
    let changeableUrl = API_URL;

    if (country) {
      changeableUrl = `${API_URL}/countries/${country}`;
    }

    const data = axios.get(changeableUrl);

    data
      .then(({ data }) => {
        const newArr = [
          {
            title: "CONFIRMED",
            cases: data.confirmed.value,
            timestamp: new Date(data.lastUpdate).toDateString(),
            style: "infected",
          },
          {
            title: "DEATHS",
            cases: data.deaths.value,
            timestamp: new Date(data.lastUpdate).toDateString(),

            style: "deaths",
          },
          {
            title: "RECOVERED",
            cases: data.recovered.value,
            timestamp: new Date(data.lastUpdate).toDateString(),

            style: "recovered",
          },
        ];

        dispatch(getCards(newArr));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
