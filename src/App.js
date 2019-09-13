import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Contact from "./pages/contact/contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigationBar/navigationBar";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </>
  );
}

export default App;
