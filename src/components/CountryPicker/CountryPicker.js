import React, { useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getPickedCountry } from "../../redux/actions/actions";
import { getCountryData } from "../../redux/thunk/thunk";

const CountryPicker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  const { countries } = useSelector((state) => ({
    countries: state.counrtyPickerReducer.countries,
  }));

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => dispatch(getPickedCountry(e.target.value))}
      >
        <option value=""> Global</option>
        {countries &&
          countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
