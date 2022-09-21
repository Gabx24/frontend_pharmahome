import data from "./data";

import Footer from "./Components/Footer";

//import logo from "./logo.png";
import FeatureProduct from "./Components/FeatureProduct";
import ControlledCarousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router basename="/">
        {/* Add Menu Component */}
        <NavBarmenu />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Profile" component={Profile} />
          <Route path="/OrderHistory" component={OrderHistory} />
          <Route path="/Signout" component={SignOut} />
        </Routes>
      </Router>

      <main>
        <ControlledCarousel />
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <FeatureProduct product={product} />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
