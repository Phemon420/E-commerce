import {AppBar,Toolbar,styled,Box,Typography, Button} from '@mui/material';
import Carousel from "react-multi-carousel";
import { bannerData } from '../../constants/data';
import 'react-multi-carousel/lib/styles.css';

const ImagesRe=styled('img')`
    width:100%;
    height:200px;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Banner(){
    return (
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        renderDotsOutside={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        {
            bannerData.map(data=> (
                <ImagesRe src={data.url}></ImagesRe>
            ))
        }
           
        </Carousel>
    )
}

export default Banner;