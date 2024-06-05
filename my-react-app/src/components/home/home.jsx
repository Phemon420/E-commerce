import NavBar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react';
import {AppBar,Toolbar,styled,Box,Typography, Button} from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productactions';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from './midslider';
import Midsection from './midsection';


const Padder=styled(Box)`
    padding:10px;
    background: #303030;
`


function Home(){
    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <Fragment>
            <NavBar/>
            <Padder>
                <Banner/>
                <MidSlide products={products} oneliner="deals of the day" timer={true}/>
                <Midsection></Midsection>
                <MidSlide products={products} oneliner="deals you can not miss" timer={false}/>
                <MidSlide products={products} oneliner="lowest price ever" timer={false}/>
                <MidSlide products={products} oneliner="lund lelo" timer={true}/>
            </Padder>
            
        </Fragment>
    )
}

export default Home;