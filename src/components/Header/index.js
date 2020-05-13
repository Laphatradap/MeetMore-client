import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1400,
    // marginBottom: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
  navLinkWhite: {
    color: "white",
    textDecoration: "none !important",
    "&:hover, &:focus": {
      color: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const userLoggedIn = useSelector((state) => state.user.token !== null);
  const { appBar, grow, title, navLinkWhite, menuButton } = classes;

  return (
    <div>
      <AppBar position="static" className={appBar}>
        <Toolbar>
          <Link to="/" className={navLinkWhite}>
            <IconButton edge="start" className={menuButton} color="inherit">
              <HomeIcon color="inherit" />
            </IconButton>
          </Link>
          <Typography variant="h6" className={title}>Meet More</Typography>
          <div className={grow} />
          {!userLoggedIn && (
            <>
              <MenuItem>
                <Link to="/login" className={navLinkWhite}>
                  Log in
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/signup" className={navLinkWhite}>
                 Sign up
                </Link>
              </MenuItem>
            </>
          )}
          {userLoggedIn && (
            <>
              <MenuItem>
                <Link to="/" className={navLinkWhite}>
                  &nbsp;&nbsp;Log out
                </Link>
              </MenuItem>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
