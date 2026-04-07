import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import NavigationBar from '../Components/NavigationBar/NavigationBar';

const Root = () => {


    return (
        <>
        <header>
            <NavigationBar/>
        </header>
           
           <main className='container mx-auto my-7'>
             <Outlet/>
            </main>


            <footer>
                <Footer/>
            </footer>
        </>

    );
};

export default Root;