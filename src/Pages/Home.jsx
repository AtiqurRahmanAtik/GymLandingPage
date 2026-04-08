import React from 'react';
import NewsletterSubscribe from '../Components/NewsletterSubscribe/NewsletterSubscribe';
import Testimonials from '../Components/Testimonials/Testimonials';
import TrainingSection from '../Components/TrainingSection/TrainingSection';
import ProductsSection from '../Components/ProductsSection/ProductsSection';

const Home = () => {


    return (
        <>
           

            <ProductsSection/>

            <TrainingSection/>

            <Testimonials/>

            <NewsletterSubscribe/>
        </>
    );
};

export default Home;