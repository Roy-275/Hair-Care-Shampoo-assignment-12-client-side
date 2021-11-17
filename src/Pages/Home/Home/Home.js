import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <BestProducts></BestProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;