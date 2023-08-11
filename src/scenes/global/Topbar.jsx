import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { Colors } from '../../theme';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';



const Topbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogout = () => {
    // Handle logout  here
  };

  return (
    <>
      <Box
        display="flex"
        padding="10px"
        justifyContent="flex-end"
        backgroundColor={Colors.main[1]}
      >
        <IconButton sx={{ color: '#fff' }} onClick={handleIconClick}>
          <PersonOutlineIcon sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List >
          <ListItem button component={Link} to="/editProfile" onClick={handleClose}>
            <ListItemIcon>
              <Icon>edit</Icon>
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default Topbar;
