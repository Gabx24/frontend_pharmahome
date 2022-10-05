//import data from "./data";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DisplayCategory from "./Components/DisplayCategory";
import Cart from "./Components/Cart";

import Profile from "./Components/Profile";

import SignOut from "./Components/SignOut";
//import NavBarmenu from "./Components/Menu/NavBarmenu";

//import Navbar from "./Components/Menu/Navbar";
import NavbarTest from "./Components/Menu/NavbarTest";

import { Navigate } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Checkout from "./Components/Checkout";
import About from "./Components/About";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import ResetPassword from "./Components/ResetPassword";

import StoreProvider from "./context/StoreContext";
//import { useContext } from "react";

function App() {
  const [products, setProducts] = useState();

  const backend = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${backend}products`);
      setProducts(result.data);
    };
    fetchData();
  }, [backend]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <StoreProvider>
      {/* Add Menu Component */}
      <NavbarTest />
      <main>
        <Container className="mt-3rem">
          {/* {console.log(products)} */}
          <Routes>
            <Route path="/Home" element={<Home products={products} />} />
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route path="/Cart" element={<Cart />} />
            <Route
              path="/product/:id"
              element={<ProductPage url={backend} products={products} />}
            />
            <Route
              path="/category/:id"
              element={<DisplayCategory products={products} />}
            />

            <Route path="/Profile" element={<Profile />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignOut" element={<SignOut />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/About" element={<About />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </StoreProvider>
  );
}

export default App;
