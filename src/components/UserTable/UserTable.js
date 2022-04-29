import React, {useState ,useEffect} from 'react'
import DataTable from '../../components/common/DataTable/DataTable'


  
  const columns = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 },
    { field: 'phone', headerName: 'Phone#', width: 150 },

  ];
    const usersTableStyles={
        height: '650px',
    }

const UserTable = ({onError}) => {

    const [users,setUsers]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) => setUsers(json))
    .catch(()=>onError())
  },[])


  return (
    <DataTable
        rows={users}
        columns={columns}
        loading={!users.length}
        sx={usersTableStyles}
    />
  )
}

export default UserTable