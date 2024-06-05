import  { useState, useContext } from 'react';
import {AppBar,Toolbar,styled,Box,Typography,Dialog,TextField, Button,Menu,MenuItem} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

const Component=styled(Menu)`
    margin-top:6px;
`

const LogOut=styled(Typography)`
    font-size:14px;
    margin-left:20px;

`

function Profile({account,setAccount}){
    const [open,setOpen]=useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const logOut = () => {
        setAccount('');
      };

    return(
        <>
            <Typography style={{margintop:2 ,cursor:'pointer'}} onClick={handleClick}>{account}</Typography>
            <Component
                anchorEl={open}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>{handleClose(); logOut(); }}>
                <PowerSettingsNewIcon sx={{ color: theme.palette.ochre.main }} fontSize='small'></PowerSettingsNewIcon>
                <LogOut>LogOut</LogOut></MenuItem>
            </Component>
        </>
    );
}

export default Profile;