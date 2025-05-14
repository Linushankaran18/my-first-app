import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [{
    title: "iPhone 15 Pro",
    imageSrc: "images/iphone.png",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    price: 999

  },

  {
    title: "iPhone 15",
    imageSrc: "images/iphone15.png",
    specification: [
      "A16 Bionic chip with 6-core GPU",
      "2x Telephoto camera",
      "Up to 20 hours video playback"
    ],
    price: 799
  },
  {
    title: "iPhone 15 Plus",
    imageSrc: "images/iphone15plus.png",
    specification: [
      "A16 Bionic chip with 6-core GPU",
      "2x Telephoto camera",
      "Up to 26 hours video playback"
    ],
    price: 899
  }
  ];

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.title} product={product} onPurchase={handlePurchase} />))}
      </ProductList>

      <h2> Products which costs upto $500</h2>
      <ul>
        { }
      </ul>
    </div>
  );
}

export default App;