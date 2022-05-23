import Navbar from './components/Navbar/Navbar';
import ProductPhoto from './components/ProductPhoto/ProductPhoto';
import ProductInfo from './components/ProductInfo/ProductInfo';
import AddToCart from './components/AddToCart/AddToCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductPhoto />
      <ProductInfo />
      <AddToCart />
    </div>
  );
}

export default App;