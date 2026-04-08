import React from 'react';
import NewsletterSubscribe from '../Components/NewsletterSubscribe/NewsletterSubscribe';
import Testimonials from '../Components/Testimonials/Testimonials';
import TrainingSection from '../Components/TrainingSection/TrainingSection';
import ProductsSection from '../Components/ProductsSection/ProductsSection';
import Header from '../Components/Header/Header';

const Home = () => {


    return (
        <>
           
            <Header/>
            <ProductsSection/>

            <TrainingSection/>

            <Testimonials/>

            <NewsletterSubscribe/>
        </>
    );
};

export default Home;