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

function App() {
  return (
    <div>
      {/* Add Menu Component */}
      <NavBarmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Signout" element={<SignOut />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
