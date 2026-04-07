import React from 'react';
import NewsletterSubscribe from '../Components/NewsletterSubscribe/NewsletterSubscribe';
import Testimonials from '../Components/Testimonials/Testimonials';
import TrainingSection from '../Components/TrainingSection/TrainingSection';
import ProductsSection from '../Components/ProductsSection/ProductsSection';

const Home = () => {
    return (
        <>
            <h1 className='text-2xl text-center my-7 text-red-500'>Home page </h1>

            <ProductsSection/>

            <TrainingSection/>

            <Testimonials/>

            <NewsletterSubscribe/>
        </>
    );
};

export default Home;