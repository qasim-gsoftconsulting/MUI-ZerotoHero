import React, {useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
    sx,
}) => {
  
    const [newPageSize, setNewPageSize]=useState(2)
  return (
    <DataGrid 
        rows={rows}
        columns={columns}
        loading={loading}
        sx={sx}
        checkboxSelection
        pagination
        pageSize={newPageSize}
        onPageSizeChange={(newPageSize)=>setNewPageSize(newPageSize)}
        rowsPerPageOptions={[2,5,10]}
    />
      )
}

export default DataTable