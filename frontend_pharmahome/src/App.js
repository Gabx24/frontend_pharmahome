//import data from "./data";
import Footer from "./Components/Footer";
//import logo from "./logo.png";

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

function App() {
  return (
    <div>
      {/* Add Menu Component */}
      <NavBarmenu />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
