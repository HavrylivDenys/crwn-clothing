import React from 'react';
import { Switch, Route } from 'react-router-dom'


import './App.css';
import HomePage from './pages/homepage/hompage.component'
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-page/sign-page.component"
import Header from "./components/header/header.component"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>      
    </div>
  );
}

export default App;
