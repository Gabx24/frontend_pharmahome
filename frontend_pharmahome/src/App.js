import data from "./data";
<<<<<<< HEAD
import Footer from "./Components/Footer";
import FeatureProduct from "./Components/FeatureProduct";
import ControlledCarousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
=======
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
>>>>>>> b70827ff38ad13d7d9f506ad5953291c653bc1ef

function App() {
  return (
    <div>
<<<<<<< HEAD
=======
      <Router basename="/">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Profile" component={Profile} />
          <Route path="/OrderHistory" component={OrderHistory} />
        </Routes>
      </Router>
>>>>>>> b70827ff38ad13d7d9f506ad5953291c653bc1ef
      {/* <header>
        <img src={logo} className="logo-header" alt="logo" />
        <a href="/">PharmaHome</a>
      </header> */}
      <main>
        <ControlledCarousel />
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
<<<<<<< HEAD
            
            
=======
            <FeatureProduct product={product} />
>>>>>>> b70827ff38ad13d7d9f506ad5953291c653bc1ef
          ))}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
