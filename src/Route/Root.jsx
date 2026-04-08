import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Header from '../Components/Header/Header';

const Root = () => {


    return (
        <>
        <header>
            {/* <NavigationBar/> */}

            {/* <Header/> */}
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