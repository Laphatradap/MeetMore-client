import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import HomeBanner from "../../Images/home_banner.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  background: {
    backgroundImage: `url(${HomeBanner})`,
    width: "100%",
    height: "110vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.6",
    position: "relative",
  },

  title: {
    position: "absolute",
    left: 0,
    top: "50%",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#282828",
  },
  text: {
    fontSize: 20,
    fontWeight: "semi-bold",
  },
  button: {
    marginTop: theme.spacing(1),
    justifyContent: "center",
  },
}));

export default function Banner() {
  const classes = useStyles();
  const history = useHistory();

  const userLoggedIn = useSelector((state) => state.user.token !== null);
  const isLoggedIn = () => {
    if (!userLoggedIn) {
      setTimeout(() => {
        history.push("/login");
      }, 500);
    } else {
      history.push("/create");
    }
  };
  return (
    <div className={classes.root}>
      <CardMedia
        component="img"
        className={classes.background}
        width="1000"
        height="300"
      />
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid item>
          <Typography className={classes.title}>
            Schedule Once, Meet More!
            <Typography className={classes.text}>
              With MeetMore, you can quickly and easily find multiple suitable
              dates for your group meet-ups!
            </Typography>
            <Grid sm={12}>
              <Button
                size="large"
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => isLoggedIn()}
              >
                Start Scheduling!
              </Button>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
