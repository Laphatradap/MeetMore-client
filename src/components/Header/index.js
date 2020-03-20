import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const userLoggedIn = useSelector(state => state.user.token !== null);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Meet More
          </Typography>
          {!userLoggedIn && (
            <>
          <Link to="/signup"> 
          <Button color="textPrimary">Sign up</Button>
          </Link>
          <Link to="/login"> 
          <Button color="textPrimary">Login</Button>
          </Link>
          </>
          )}
          {userLoggedIn && (
            <>
          <Link to="/"> 
          <Button color="textPrimary">Log out</Button>
          </Link>
          </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Let's Meet</h1>
//         <nav>
//           <Link to="/login">Log in</Link>
//           <Link to="/signup">Sign up</Link>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Header;
