import data from "./data";
import logo from "./logo.png";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo-header" alt="logo" />
        <a href="/">PharmaHome</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            
            
          ))}
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
