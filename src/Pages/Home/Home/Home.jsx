import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home | Language Safari
                </title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;