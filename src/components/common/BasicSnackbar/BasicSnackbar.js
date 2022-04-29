import React, {useState, forwardRef} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CommonButton from '../CommonButton/CommonButton';



const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({ open, onClose, severity, message }) => {
  return (
  <>
      <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={onClose}
      >
          <Alert
              onClose={onClose}
              severity={severity}
          >
              {message}
          </Alert>
      </Snackbar>
  </>
);
}; 

  export default Snackbar 