import React, {useState} from "react";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { IconButton } from "@mui/material";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { cardHeaderStyles } from "./style";
import Typography from "@mui/material/Typography";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import Box from "@mui/material/Box";
import NewUserModal from "../../components/Modal/NewUserodal/NewUserModal";

const Authentication = () => {

  const [openModal, setOpenModal]=useState(false)
  const [users, setUsers]=useState([])
  const [searchResults]=useState(users)

  const getHeader = () => {
    const handleSearch = (value) => {
      filterData(value);
    };

    const filterData=(value)=>{
      const lowercasedValue = value.toLowerCase().trim()
      if (lowercasedValue==="") setUsers(searchResults)

      else {
        const filteredData = searchResults.filter((item) => {
            return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(lowercasedValue)
            );
        });
        setUsers(filteredData)
    };
    }
    const addUser = () => {
      setOpenModal(true);
      console.log('Clicked')
    };
    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleSearch(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            xs={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const addNewUser=(data)=>{
      users.push({...data})
      setOpenModal(false )    
  }

  const getContent = () => (
    <>
    { 
       users.length ? 
            users.map((user) => (
                 <Box sx={{ marginBottom: '20px' }}>
                      <Typography>User ID: {user.userId}</Typography>
                      <Typography>Email: {user.email}</Typography>
                      <Typography>Phone Number: {user.phoneNumber}</Typography>
                 </Box>
            )) :
            <Typography 
              align="center"
              sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
            >
               No users for this project yet
            </Typography>
            }
    </>
  );

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
     < NewUserModal open={openModal} onClose={()=>setOpenModal(false)}  addNewUser={addNewUser} />
    </GridWrapper>
  );
};
export default Authentication;
