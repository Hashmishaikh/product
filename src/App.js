import React from "react";
import "./App.css";
import Bundles from "./Bundles";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import {CartProvider} from 'react-use-cart'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-sub">
        <CartProvider>
        <Home />
        <Cart />
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
