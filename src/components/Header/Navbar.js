import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from '../consts/NavbarListItems'
import {navbarStyles} from './styles'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate=useNavigate()
  return (
    <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem button key={item.id} onClick={()=>navigate(item.route)}>
              <ListItemIcon sx={navbarStyles.icons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText sx={navbarStyles.text}
               primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Navbar