import { useState } from 'react'
import {AppBar,Toolbar,styled,Box,Typography,Grid,Drawer,List,IconButton} from '@mui/material';
import Search from './search'
import CustomButtons from './custombuttons';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { flipkartlogo } from '../../constants/data';
const StyleHeader=styled(AppBar)`
  background: #FFFF00;
  height:55px;
`

const Styleimage=styled(Link)`
  margin-left:15%;
  line-height:0;
`
const Styleplus=styled(Typography)`
  font-size:10px;
  color:#000000;
  font-style:italic;
  margin-left:15%;
`


const StyleNew=styled(Box)(({theme})=>({
  margin:'0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))
  
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
      display: 'block'
  }
}));

function Header() {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );

  return (
    <StyleHeader >
        <Toolbar style={{minHeight:55}}>
          <MenuButton color="black" onClick={handleOpen}>
            <Menu />
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Styleimage to={`/`}>
            <img src={flipkartlogo} style={{width:75}}/>
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