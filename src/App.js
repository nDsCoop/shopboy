import React from 'react';
import './App.css';
//import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterSrceen';
import { useSelector } from 'react-redux';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PLaceOrderScreen from './Screens/PlaceOrderScreen';

 function App(){
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  const  openMenu = () => {
    document.querySelector(".siderbar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".siderbar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/" >amadone</Link>
                  </div>
                  <div className="header-links">
                      <a href="singin.html">Cart</a>
                        {
                           userInfo ? <Link to="/profle">{userInfo.name}</Link> 
                        : <Link to="/signin">Sign In</Link>
                        }
                      
                  </div>
              </header>
              <aside className="siderbar">
                  <h3>Shopping Categories</h3>
                  <button className="siderbar-close-button" onClick={closeMenu}>x</button>
                  <ul>
                      <li>
                      <Link to="/signin">
                           Sign In
                           </Link>
                      </li>
                      <li>
                          <a href="index.html">Shirts</a>
                      </li>
                  </ul>
              </aside>
            
              <main className="main">
                  <div className="content">
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/placeorder" component={PLaceOrderScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                    
                  </div>
                
              </main>
              <footer className="footer">
                  <i> All right nDs</i>
              </footer>
          </div>
        </BrowserRouter>
  );
}

export default App;
