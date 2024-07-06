import { useState,useContext } from 'react'
import {AppBar,Toolbar,styled,Box,Typography, Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LoginDialogue from '../Login/logindailogue';
import { DataContext } from '../../context/dataprovider';
import Profile from './profile';


const WrapItup=styled(Box)(({ theme }) => ({
    display:'flex',
    margin:'0 3% 0 auto',
    '& > *':{
        marginRight:40,
        fontSize:14,
        alignItems:'center',
    },
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
  }));
    

const Container=styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
  }));


const LoginButton=styled(Button)`
    background:#000;
    color:#fff;
    text-transition:none;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    padding:5px 40px;
    height:30px;
    margin-right:20px;
`

function custombutton(){
    const[open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);

    function handlechangelogin(){
        console.log("change ho raha hain");
        setOpen(true);
    }

    return(
        <WrapItup>
            {
                account?<Profile account={account} setAccount={setAccount}></Profile>:
                <LoginButton variant='container' onClick={handlechangelogin}>LogIn</LoginButton>
            }
            <Container>
                <ShoppingCartIcon style={{color:'black', marginTop:5}} ></ShoppingCartIcon>
                <Typography style={{color:'black', marginTop:5}}>Cart</Typography>
            </Container>

            <Container>
                <StorefrontIcon style={{color:'black', marginTop:5}}></StorefrontIcon>
            </Container>

            <Box>
                <MoreVertIcon style={{color:'black', marginTop:5}}></MoreVertIcon>
            </Box>
            <LoginDialogue open={open} setOpen={setOpen}/>
        </WrapItup>
    )
}

export default custombutton;