import {Divider,styled,Box,Typography, Button} from '@mui/material';
import Slide from './Slide';

const Component=styled(Box)`
    display:flex;
`

const Leftcomponent=styled(Box)`
    width:83%;
`

const Rightcomponent=styled(Box)`
    background:#2C2C2A;
    padding:5px;
    margin-top:2px;
    margin-left:7px;
    width:17%;
    text-align:center;
`

const MidSlide=({products,oneliner,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <Component>
            <Leftcomponent>
                <Slide
                    products={products}
                    oneliner={oneliner}
                    timer={timer}
                />
            </Leftcomponent>
            <Rightcomponent>
                <img src={adURL} style={{width:195,height:360}}></img>
            </Rightcomponent>
            <Divider></Divider>
        </Component>
        
    )
}


export default MidSlide;