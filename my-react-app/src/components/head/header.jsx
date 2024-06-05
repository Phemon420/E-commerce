import { useState } from 'react'
import {AppBar,Toolbar,styled,Box,Typography} from '@mui/material';
import Search from './search'
import CustomButtons from './custombuttons';

const StyleHeader=styled(AppBar)`
  background: #FFFF00;
  height:55px;
`

const Styleimage=styled(Box)`
  margin-left:15%;
  line-height:0;
`
const Styleplus=styled(Typography)`
  font-size:10px;
  color:#000000;
  font-style:italic;
`


const StyleNew=styled(Box)`
  margin-left:0 5% 0 auto;
`

function Header() {
  return (
    <StyleHeader >
        <Toolbar style={{minHeight:55}}>
          <Styleimage>
            <img src="../src/assets/flipkart-logo-yellow.png" style={{width:75}}/>
            <Box>
              <Styleplus >
                Explore plus
              </Styleplus>
            </Box>
          </Styleimage>
          <Search></Search>
          <StyleNew>
            <CustomButtons></CustomButtons>
          </StyleNew>
        </Toolbar>
      </StyleHeader>
  )
}

export default Header;