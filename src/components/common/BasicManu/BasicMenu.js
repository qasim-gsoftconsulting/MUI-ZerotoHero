import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BasicMenu = ({anchorEl, open, handleClose, menuItems}) => {

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >{menuItems.map((items)=>(
        <MenuItem onClick={handleClose}>{items.label}</MenuItem>
    ))}
    </Menu>
  )
}

export default BasicMenu