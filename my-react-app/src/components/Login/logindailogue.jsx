//import { useState,useContext } from 'react'
import  { useState, useContext } from 'react';
import {AppBar,Toolbar,styled,Box,Typography,Dialog,TextField, Button} from '@mui/material';
import { signlolup, loglolup } from '../../service/api';
import { DataContext } from '../../context/dataprovider';


const Component=styled(Box)`
    height:90vh;
    width:100vh;
`;

const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    height:100%;
    padding:25px 35px;
    flex:1;
    & > div, & > button,& > p{
        margin-top:20px;
    }
`;

const Image=styled(Box)`
    background:#262626 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 70% no-repeat;
    height:100%;
    width:35%;
    padding: 45px 35px;
    color:white;
    & > h5,& >p{
        font-weight:600;
    }
`;

const LoginButton=styled(Button)`
    text-transform:none;
    height:48px;
    border-radius:2px;
    color:#949e08;
    background:black;
    box-shadow:0px 2px 4px 0 rgb(0 0 0/ 20%);
`;

const RequestButton=styled(Button)`
    text-transform:none;
    height:48px;
    border-radius:2px;
    color:#949e08;
    background:black;
    box-shadow:0px 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text=styled(Typography)`
    font-size:12px;
    color:black;
`

const Create=styled(Typography)`
    font-size:14px;
    text-align:center;
    font-weight:600;
    cursor:pointer;
    color:#949e08;
`
const accountvalue={
    login:{
        view:'login'
    },
    signup:{
        view:'signup'
    }
}

const signupvalues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginvalues={
    email:'',
    password:'',
}

function LoginDialogue({open,setOpen}){

    const[LogSign,setLogSign]=useState(accountvalue.login);
    const[Initialsign,setInitialsign]=useState(signupvalues);
    const[Initiasign,setInitiasign]=useState(loginvalues);
    const {setAccount} =useContext(DataContext);


    function handleclose(){
        setOpen(false);
        setLogSign(accountvalue.login);
    }

    function handlelogsign(){
        setLogSign(accountvalue.signup);
    }

    function onInputChange(e){
        setInitialsign({...Initialsign,[e.target.name]:e.target.value});
    }

    function onValueChange(e){
        setInitiasign({...Initiasign,[e.target.name]:e.target.value});
    }

    const signingup = async ()=>{
           let response = await signlolup(Initialsign);
           if(!response)return;
           handleclose();
           setAccount(Initialsign.firstname);
           console.log(response);
    }

    const logup = async ()=>{
        let response = await loglolup(Initiasign);
        if(!response)return;
        handleclose();
        setAccount(response.firstname);
        console.log(response);
 }

    return(
        <Dialog open={open} onClose={handleclose} PaperProps={{sx:{maxWidth:'unset',maxHeight:'unset'}}}>
            <Component >
                <Box style={{display:'flex',height:'100%'}}>
                {
                        LogSign.view==='login'?
                    <Image>
                        <Typography variant='h5'>Login</Typography>     
                        <Typography style={{marginTop:20}}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Image>
                        :
                        <Image>
                        <Typography variant='h5'>Looks like you're new here</Typography>     
                        <Typography style={{marginTop:20}}>signup with your mobile no.to get started</Typography>
                    </Image>
                    }
                    {
                        LogSign.view==='login'?
                        <Wrapper>
                        <TextField  label="Enter Email/Mobile no." onChange={(e)=> onValueChange(e)} variant="standard" name='email'/>
                        <TextField  label="Enter password" onChange={(e)=> onValueChange(e)} variant="standard" name='password'/>
                        <Text>By agree, you agree to flipkart's Term of use and Privacy Policy</Text>
                        <LoginButton onClick={logup}>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>or</Typography>
                        <RequestButton>Request OTP</RequestButton>
                        <Create onClick={handlelogsign}>new to flipkart? create an account</Create>
                    </Wrapper>
                        :
                    <Wrapper>
                        <TextField  label="Enter Firstname"  onChange={(e)=> onInputChange(e)} name='firstname' variant="standard" />
                        <TextField  label="Enter Lastname" onChange={(e)=> onInputChange(e)} name='lastname' variant="standard" />
                        <TextField  label="Enter Username" onChange={(e)=> onInputChange(e)} name='username' variant="standard" />
                        <TextField  label="Enter Email" onChange={(e)=> onInputChange(e)} name='email' variant="standard" />
                        <TextField  label="Enter password" onChange={(e)=> onInputChange(e)} name='password' variant="standard" />
                        <TextField  label="Enter phone" onChange={(e)=> onInputChange(e)} name='phone' variant="standard" />
                        <LoginButton onClick={signingup}>Continue</LoginButton>
                    </Wrapper>
                    }
                    

                </Box>
            </Component>
        </Dialog>
    );

}

export default LoginDialogue;