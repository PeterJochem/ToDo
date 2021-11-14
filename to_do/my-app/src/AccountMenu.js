import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

//import PersonAdd from '@materail-ui/icons/PersonAdd';
//import Settings from '@material-ui/icons/Settings';
//import Logout from '@material/icons/Logout';

let avatar_src = "/avatar.jpg";
avatar_src = "http://localhost:3001/get_user_avatar/PeterJochem";

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleAddItemClick() { 
	//handleClose();
	props.setModalMode("addItem");
	props.setIsModalOpen(true);
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
	<Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }} src={avatar_src}></Avatar>
          </IconButton>
        </Tooltip>
	  
	  <Typography onClick={handleAddItemClick} sx={{ minWidth: 100 }}>Add Item</Typography>
	  
	  </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar src={avatar_src}/> Profile
        </MenuItem>
        <MenuItem>
          View Stats
        </MenuItem>
	  <MenuItem>
          Current To Dos
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
	  </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
