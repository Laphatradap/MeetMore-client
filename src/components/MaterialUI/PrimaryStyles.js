import { makeStyles } from "@material-ui/core/styles";
import HomeBanner from "../../Images/home_banner.jpg"

const PrimaryStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "50",
    padding: "auto",
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "primary",
    width: "100%",
    padding: "auto",
    fontSize: 40
  },
  homeBanner: {
    // display: "initial",

    backgroundImage: `url(${HomeBanner})`,
    width: "30", 
    height: "50",
    padding: "auto",
    opacity: 0.5
  }
}));

export default PrimaryStyles;
