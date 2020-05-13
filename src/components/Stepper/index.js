import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import Availability from "../Availability";
import CreateGroup from "../CreateGroup";
import MatchedAvailability from "../MatchedAvailability";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     flexGrow: 1,
//     // marginTop: theme.spacing(),
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   finished: {
//     display: "inline-block",
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   groupButton: {
//     marginTop: theme.spacing(4),
//     display: "flex",
//     flexDirection: "row",
//     position: "fixed",
//     bottom: 10,
//     left: 0,
//     width: "100%",
//     justifyContent: "center",
//   },
// }));

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
    // marginTop: theme.spacing(4),
    // marginRight: theme.spacing(1),
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

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <Availability />;
//     case 1:
//       return <CreateGroup />;
//     case 2:
//       return <MatchedAvailability />;
//     default:
//       return "Unknown step";
//   }
// }

// export default function HorizontalNonLinearAlternativeLabelStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState(new Set());
//   const { root, button, finished, instructions, groupButton } = classes;

//   const steps = getSteps();

//   const totalSteps = () => {
//     return getSteps().length;
//   };

//   const completedSteps = () => {
//     return completed.size;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !completed.has(i))
//         : activeStep + 1;

//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = new Set(completed);
//     newCompleted.add(activeStep);
//     setCompleted(newCompleted);
//     if (completed.size !== totalSteps()) {
//       handleNext();
//     }
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted(new Set());
//   };

//   function isStepComplete(step) {
//     return completed.has(step);
//   }

//   return (
//     <Grid item xs={12}>
//       <div className={root}>
//         <Stepper alternativeLabel nonLinear activeStep={activeStep}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const buttonProps = {};
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepButton
//                   onClick={handleStep(index)}
//                   completed={isStepComplete(index)}
//                   {...buttonProps}
//                 >
//                   {label}
//                 </StepButton>
//               </Step>
//             );
//           })}
//         </Stepper>
//         <div>
//           {allStepsCompleted() ? (
//             <div>
//               <Typography className={instructions}>
//                 All steps completed - you&apos;re finished
//               </Typography>
//               <Button variant="contained" onClick={handleReset}>Reset</Button>
//             </div>
//           ) : (
//             <div>
//               <Typography className={instructions}>
//                 {getStepContent(activeStep)}
//               </Typography>
//               <div className={groupButton}>
//                 <Button
//                   variant="contained"
//                   disabled={activeStep === 0}
//                   onClick={handleBack}
//                   className={button}
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleNext}
//                   className={button}
//                 >
//                   Next
//                 </Button>
//                 {activeStep !== steps.length &&
//                   (completed.has(activeStep) ? (
//                     <Typography variant="caption" className={finished}>
//                       Step {activeStep + 1} already completed
//                     </Typography>
//                   ) : (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={handleComplete}
//                     >
//                       {completedSteps() === totalSteps() - 1
//                         ? "Finish"
//                         : "Complete Step"}
//                     </Button>
//                   ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </Grid>
//   );
// }
