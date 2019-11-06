import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';




function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Switch >
        <
        Route exact path = '/'
        component = { HomePage }
        /> <
        Route path = '/shop'
        component = { ShopPage }
        />

        <
        /Switch>   < /
        div >
    );
}

export default App;