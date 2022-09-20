import data from "./data";
import logo from "./logo.png";
import FeatureProduct from "./Components/FeatureProduct";
import ControlledCarousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo-header" alt="logo" />
        <a href="/">PharmaHome</a>
      </header>
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
