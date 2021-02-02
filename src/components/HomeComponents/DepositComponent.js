import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles, Typography } from "@material-ui/core";
import TitleComponent from "../TitleComponent";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function DepositComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TitleComponent>Recent Deposits</TitleComponent>
      <Typography variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
