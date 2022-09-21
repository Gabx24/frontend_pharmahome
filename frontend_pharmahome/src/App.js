import data from "./data";
//import logo from "./logo.png";
import FeatureProduct from "./Components/FeatureProduct";
import ControlledCarousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import OrderHistory from "./Components/OrderHistory.js";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Profile" component={Profile} />
          <Route path="/OrderHistory" component={OrderHistory} />
        </Routes>
      </Router>
      {/* <header>
        <img src={logo} className="logo-header" alt="logo" />
        <a href="/">PharmaHome</a>
      </header> */}
      <main>
        <ControlledCarousel />
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <FeatureProduct product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
