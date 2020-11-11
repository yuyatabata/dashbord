import React, { useEffect } from "react";
import styles from "./DashBord.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import SwitchCountry from "../SwitchCountry/SwitchCountry";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBord: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashbord
          </Typography>
          {data && (
            <Typography variant="body1">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>

          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashBord;
