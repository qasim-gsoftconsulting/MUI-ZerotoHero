import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import BasicMenu from "../BasicManu/BasicMenu";

const notifications = [
  {
    id: 0,
    label: "First notification",
  },
  {
    id: 1,
    label: "second notification",
  },
];

const NotificationBell = ({ iconColor }) => {
  const newNotifications = `You have ${notifications.length} new notiication`;
  const noNotification = "No new notiication";
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Box>
      <Tooltip title={notifications.length ? newNotifications : noNotification}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error" max={99}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={openMenu}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </Box>
  );
};

export default NotificationBell;
