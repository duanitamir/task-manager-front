import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'


export const PrivateRoute =({isAuthenticated, component: Component, ...rest })  => {

    return(
        <div>
            <Header />
            <Component { ...rest}/>
            <Footer />
        </div>
    )

}