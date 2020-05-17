import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import Availability from "../Availability";
import CreateGroup from "../CreateGroup";
import MatchedAvailability from "../MatchedAvailability";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  button: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: 5,
    left: 0,
    width: "100%",
    justifyItems: "center",
  },
}));

function getSteps() {
  return ["Add your availability", "Create a group", "Check matched dates"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Availability />;
    case 1:
      return <CreateGroup />;
    case 2:
      return <MatchedAvailability />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const { root, backButton, button, instructions } = classes;
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={button}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                className={backButton}
                fullWidth
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext} fullWidth>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
