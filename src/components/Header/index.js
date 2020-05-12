import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    top: 0,
    bottom: "auto",
    width: "100%",
    height: "56px",
  },
  title: {
    flexGrow: 1,
    fontWeight: 400,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const userLoggedIn = useSelector((state) => state.user.token !== null);
  const handleMenu = () => {
    history.push("/");
  };
  const { appBar, title } = classes;

  return (
    <div>
      <AppBar position="fixed" color="primary" className={appBar}>
        <Toolbar>
          <Typography onClick={handleMenu} variant="h6" className={title}>
            Meet More
          </Typography>
          {!userLoggedIn && (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
          {userLoggedIn && (
            <>
              <Link to="/">
                <Button>Log out</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
