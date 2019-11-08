import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import LandingPage from './pages/landingpage/landingpage.component';

import Header from './components/header/header.component';

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';




class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth=null;

    componentDidMount() {
        this.unsubscribeFromAuth=auth.onAuthStateChanged(
            user => {
                this.setState({ currentUser: user });
                console.log(user);

            });

    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }
    render() {
        return ( <div className = "App" >
            <Header currentUser={this.state.currentUser}/>
            <Switch className='page'>
                <Route exact path = '/' component = { HomePage }/> 
                <Route path = '/shop' component = { ShopPage }/> 
                <Route path = '/sign-in' component = { LandingPage }/>
                </Switch>   
            </div >
        );
    }
}

export default App;