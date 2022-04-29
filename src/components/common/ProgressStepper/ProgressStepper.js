import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography,Box } from "@mui/material";
import CommonButton from "../CommonButton/CommonButton";


const ProgressStepper = ( {steps, stepDescripton}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepCompleted, setStepCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(stepCompleted).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1);
  };
  const handleNext = () => {
    const newSetpCompleted = stepCompleted;
    newSetpCompleted[activeStep] = true;
    setStepCompleted(newSetpCompleted);
    setActiveStep((preActiveStep) => preActiveStep + 1);
  };
  const handleReset=()=>{
    setActiveStep(0)
    setStepCompleted({})
  }

  return (
    <Box sx={{ width: '100%' }}>
    <Stepper
        activeStep={activeStep}
    >
            {steps.map((step, index) => (
                <Step
                    key={step}
                    stepCompleted={stepCompleted[index]}
                >
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div>
            {allStepsCompleted ? 
             (
                <>
                    <Typography
                        sx={{ mt: 2, mb: 1 }}
                    >
                        All Steps Completed
                    </Typography>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                    >
                        <Box sx={{ flex: '1 1 auto' }} />
                        <CommonButton
                            variant="contained"
                            onClick={handleReset}
                        >
                            Reset
                        </CommonButton>
                    </Box>
                </>
             ) : (
                <>
                    <Typography
                        sx={{ mt: 2, mb: 1 }}
                    >
                        {stepDescripton[activeStep]}
                    </Typography>
                    <Box 
                        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                    >
                        <CommonButton
                            onClick={handleBack}
                            variant="contained"
                            disabled={activeStep === 0}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </CommonButton>
                        <Box sx={{flex: '1 1 auto' }} />
                        <CommonButton
                            onClick={handleNext}
                            variant="contained"
                        >
                            {completedSteps === totalSteps - 1 ? 'Finish' : 'Next'}
                        </CommonButton>
                    </Box>
                </>
            )}
        </div>
    </Box>
  );
};

export default ProgressStepper;
