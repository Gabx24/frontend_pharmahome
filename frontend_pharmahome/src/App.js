//import data from "./data";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import OrderHistory from "./Components/OrderHistory";
import SignOut from "./Components/SignOut";
import NavBarmenu from "./Components/Menu/NavBarmenu";
import { Navigate } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Checkout from "./Components/Checkout";
import About from "./Components/About";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

function App(props) {
  const [products, setProducts] = useState([]);

  const backend = process.env.BACKEND_URL || "http://localhost:8000/";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(backend);
      setProducts(result.data);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    products.length && (
      <div>
        {/* Add Menu Component */}
        <NavBarmenu />
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
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/OrderHistory" element={<OrderHistory />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignOut" element={<SignOut />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    )
  );
}

export default App;
