import React, { Fragment, useEffect } from 'react';
import { styled, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productactions';

import NavBar from './Navbar';
import Banner from './Banner';
import MidSlide from './midslider';
import Midsection from './midsection';

// Styled Components
const Padder = styled(Box)`
    padding: 10px;
    background: #303030;
    max-width: 1200px;
    margin: 0 auto; /* Center the content */
    overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const Layout = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 110vw;
    overflow-x: hidden;
    padding:10px;4
`;

function Home() {
    const { products } = useSelector((state) => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Layout>
            <NavBar />
            <Padder>
                <Banner />
                <MidSlide products={products} oneliner="Deals of the day" timer={true} />
                <Midsection />
                <MidSlide products={products} oneliner="Deals you cannot miss" timer={false} />
                <MidSlide products={products} oneliner="Lowest price ever" timer={false} />
                <MidSlide products={products} oneliner="Exciting offers" timer={true} />
            </Padder>
        </Layout>
    );
}

export default Home;
