import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {Divider,styled,Box,Typography, Button} from '@mui/material';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';

const Jabra=styled(Box)`
    background:#FDFCFC;
`

const View=styled(Box)`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    padding:10px 10px;
    box-shadow:0px 2px 4px 0 rgb(0 0 0/ 20%);
`

const Timerr=styled(Box)`
    display:flex;
    flex-direction:row;
    text-align:center;
    color:#7f7f7f;
`

const Text=styled(Typography)`
    text-align:center;
    font-weight:600;
    font-size:22px;
    margin-right:25px;
    line-height:32px;
`

const Crf=styled(Button)`
    margin-left:auto;
    background-color:#FFC300;
    background-radius:2px;
    font-size:13px;
    font-weight:600;
`

const Prod=styled(Box)`
    text-Align:center;
    padding:25px 15px;
    margin:0 10px; /* Add margin here */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    background-color: white;
`

const Texter=styled(Typography)`
    font-size:14;
`

const Imag=styled('img')({
     width:150,
    height:150
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide =({products,oneliner,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer=({hours,minutes,seconds})=>{
        return <Box variant="span" textAlign="center">{hours}:{minutes}:{seconds} left</Box>
    }
    return (
        <Jabra>
        <View>
        <Text style={{color:"black"}}>{oneliner}</Text>
        
            {timer &&
            <Timerr >
                <img src={timerURL} style={{width:24}}></img>
                <Countdown date={Date.now()+5.04e+7} renderer={renderer}></Countdown>
            </Timerr>
            }
        
        <Crf variant="contained">view all</Crf>
        </View>
        
        <Divider/>

        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        renderDotsOutside={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >{
            products.map(product =>
            <Prod>
                <Link to={`product/${product.id}`}>
                    <Imag src={product.url}/>
                    <Texter style={{fontWeight:600,color:'#212121'}}>{product.title_short}</Texter>
                    <Texter style={{color:'Green'}}>{product.discount}</Texter>
                    <Texter style={{color:'#212121',opacity:0.6}}>{product.tagline}</Texter>
                </Link>
            </Prod>
            )
        }
        </Carousel>
        <Divider></Divider>
        </Jabra>
    )
}

export default Slide;