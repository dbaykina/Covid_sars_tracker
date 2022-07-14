import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import CardItem from "./CardItem";
import { getData } from "../../redux/thunk/thunk";


const Cards = () => {
  const dispatch = useDispatch();

  const { data, pickedCountry } = useSelector((state) => ({
    data: state.cardReducer.cards,
    pickedCountry: state.counrtyPickerReducer.pickedCountry,
  }));

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    dispatch(getData(pickedCountry));
  }, [pickedCountry]);
  

  return (
    <Grid container spacing={4} justifyContent="center">
      {data && data.map((item, index) => <CardItem key={index} item={item} />)}
    </Grid>
  );
};

export default Cards;
