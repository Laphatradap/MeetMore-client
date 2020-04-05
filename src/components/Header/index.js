import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    bottom: "auto",
    width: "100%",
    height: "56px",
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const userLoggedIn = useSelector(state => state.user.token !== null);

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Meet More
          </Typography>
          {!userLoggedIn && (
            <>
              <Link to="/signup">
                <Button className={classes.root}>Sign up</Button>
              </Link>
              <Link to="/login">
                <Button className={classes.root}>Login</Button>
              </Link>
            </>
          )}
          {userLoggedIn && (
            <>
              <Link to="/">
                <Button className={classes.root}>Log out</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
