import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from "@material-ui/core";

function mapStateToProps(state) {
  return {
    navbar: state.navbar.navbar,
  };
}

function mainListItems({props}) {
  console.log(props)
  return (
    <div>
      {this.props.navbar.menu.map((item, i) => 
          <ListItem button key={i}>
          <ListItemText primary={item.name} />
        </ListItem>
      )}
    </div>
  );
}

// export default mainListItems;
export default connect(mapStateToProps)(mainListItems);
