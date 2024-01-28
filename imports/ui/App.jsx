import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginForm} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
            <Footer/>
        </>
        
    );
};

export default App;
