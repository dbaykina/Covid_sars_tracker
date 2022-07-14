import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cn from "classnames";


const CardItem = ({ item, index }) => {
  return (
    <Grid item xs={12} md={2} key={index}>
      <Card
        sx={{ align: "center" }}
        className={cn({
          [styles.confirmed]: item.title === "CONFIRMED",
          [styles.deaths]: item.title === "DEATHS",
          [styles.recovered]: item.title === "RECOVERED",
        })}
      >
        <CardContent>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={item.cases} duration={2.5} separator="," />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {item.timestamp}
          </Typography>
          <Typography variant="body2">{item.subtitle}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CardItem;
