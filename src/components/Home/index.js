import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import Stepper from '../Stepper'
// import PrimaryStyles from "../MaterialUI/PrimaryStyles";
import { makeStyles } from "@material-ui/core";
import HomeBanner from "../../Images/home_banner.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${HomeBanner})`
   },
   backgroundImg: {
    backgroundImage: `url(${HomeBanner})`,
    width: "30", 
    height: "600",
    padding: "auto",
    opacity: 0.5
   }
}))
export default function Home() {
  const classes = useStyles();



  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container className={classes.root} maxWidth="false">
        <Typography className={classes.backgroundImg}>Schedule Once, Meet More!</Typography>
      </Container>
    </React.Fragment>
  );
}