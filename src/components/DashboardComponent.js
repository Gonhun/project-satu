import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ChartComponent from "./HomeComponents/ChartComponent";
import DepositComponent from "./HomeComponents/DepositComponent";
import OrderComponent from "./HomeComponents/OrderComponent";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardComponent() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <ChartComponent />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <DepositComponent />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <OrderComponent />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
