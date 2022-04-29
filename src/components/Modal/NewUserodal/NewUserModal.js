import React, {useState, useEffect} from "react";
import BasicModal from "../../common/BasicModal/BasicModal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultInputValues = {
    userId: '',
    email: '',
    phoneNumber: ''
};

const NewUserModal = ({ onClose, open, addNewUser }) => {
  const [inputValues, setInputValues] = useState(defaultInputValues);
  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiInput-root": {
        marginBottom: "20px",
      },
    },
  };

  const validationSchema = yup.object().shape({
    userId: yup
      .string()
      .required("This is required")
      .min(4, "User ID must be 4 character"),
    email: yup.string().required("Email is required").email("Emal is in valid"),
    phoneNumber: yup.number().min(11),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const addUser = (data) => {
    addNewUser(data)
  };

  const handleChange = (value) => {
    setInputValues(value);

  };

  useEffect(()=>{
      if(open) {setInputValues(defaultInputValues)
      }
  },[open])

  const getContent = () => (
    <Box>
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder="User ID"
          name="userId"
          label="User ID"
          required
          {...register("userId")}
        
          value={inputValues.userId}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
            onChange={(event) =>
            handleChange({ ...inputValues, userId: event.target.value })
          }
        />{" "}
      </Box>
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder="Email"
          name="email"
          label="Email"
          required
          {...register("email")}
         
          value={inputValues.email}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          onChange={(event) =>
            handleChange({ ...inputValues, email: event.target.value })
          }
        />{" "}
        <Box />
        <Box sx={modalStyles.inputFields}>
          <TextField
            placeholder="Phone number"
            name="phoneNumber"
            label="Phone number"
            required
            {...register("phoneNumber")}
           
            value={inputValues.phoneNumber}
            error={errors.phoneNumber ? true : false}
            helperText={errors.phoneNumber?.message}
            onChange={(event) =>
                handleChange({ ...inputValues, phoneNumber: event.target.value })
              }
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New User"
      subTitle="Fill in the input and hit the Submit button"
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default NewUserModal;
