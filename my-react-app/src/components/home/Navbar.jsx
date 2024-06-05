import {navData} from '../../constants/data'
import {AppBar,Toolbar,styled,Box,Typography, Button} from '@mui/material';

const Navigate=styled(Box)`
    display:flex;
    margin:55px 130px 0 150px;
    justify-content:space-between;
`

const Container=styled(Box)`
    padding: 12px 8px;
    text-align:center;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`

function NavBar(){
    return (
       <Navigate>
        {
            navData.map(data=>(
                <Container >
                    <img src={data.url} style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))

        }
       </Navigate>
    )
}

export default NavBar;