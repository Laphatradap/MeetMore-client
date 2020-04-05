import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Availability from "../Availability";
import CreateGroup from "../CreateGroup";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    marginTop: theme.spacing(8),
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
  }
}));

function getSteps() {
  return ["Add your availability", "Create a group", "Check matched dates"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Availability />;
    case 1:
      return <CreateGroup />;
    case 2:
      return "Step 3";
    default:
      return "Unknown step";
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());

  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);
    if (completed.size !== totalSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const buttonProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={isStepComplete(index)}
                  {...buttonProps}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed.has(activeStep) ? (
                    <Typography variant="caption" className={classes.completed}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleComplete}
                    >
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Grid>
  );
}
