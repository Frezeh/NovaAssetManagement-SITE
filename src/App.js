import React from 'react';
import Main from './components/HeaderMainComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Footer from './components/FooterComponent';
import Register from './components/register';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Dashboard from './components/Dashboard';
import Etf from './components/etf';
import Ndf from './components/ndf';
import Nmmf from './components/nmmf';
import Advisory from './components/Advisory';
import Products from './components/Products';
import { useSelector } from 'react-redux';

function App() {

  const auth = useSelector(state => state.auth);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth.isAuthenticated
        ? 
        <Dashboard {...props} />
        :        
        <Redirect to={{
            pathname: '/home',
            state: { from: location }
          }} />
    )} />
  );

  let location = useLocation();

  return (
    <>
    <div style={{backgroundColor: "white" }}>
    <CssBaseline />
      <Main />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <Switch>
              <Route exact path='/home'>
                <Home />
              </Route>
               <Route exact path='/aboutus'>
                <About />
              </Route>
              <PrivateRoute exact path='/dashboard'>
              </PrivateRoute>
              <Route exact path='/etf'>
                <Etf />
              </Route>
              <Route exact path='/ndf'>
                <Ndf />
              </Route>
              <Route exact path='/nmmf'>
                <Nmmf />
              </Route>
              <Route exact path='/advisory'>
                <Advisory />
              </Route>
              <Route exact path='/contactus'>
                <Contact />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/Products'>
                <Products />
              </Route>
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      <Footer />
    </div>
    </>
  );
}

export default App;
