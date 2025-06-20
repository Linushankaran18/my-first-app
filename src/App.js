import { useState } from "react";
import { Fragment } from "react";
import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import { ProductFilter } from "./components/ProductFilter";
import styles from "./App.module.css";



function App() {
  const products = [{
    title: "iPhone 15 Pro",
    imageSrc: "images/iphone.png",
    specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback"
    ],
    stockCount: 10,
    price: 999

  },

  {
    title: "AirPods Pro 2",
    imageSrc: "images/iphone15.png",
    specification: [
      "A16 Bionic chip with 6-core GPU",
      "2x Telephoto camera",
      "Up to 20 hours video playback"
    ],
    stockCount: 0,
    price: 249
  },
  {
    title: "Apple Watch 9",
    imageSrc: "images/iphone15plus.png",
    specification: [
      "A16 Bionic chip with 6-core GPU",
      "2x Telephoto camera",
      "Up to 26 hours video playback"
    ],
    stockCount: 6,
    price: 399
  }
  ];
  const [filters, setFilters] = useState({
    price: {
      min : 0,
      max : 999
    },
    other: "other value",
  });

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`)
  }

  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value // Ensure the value is a number
      }
    }));
  }

  return (
    <div className={styles.App}>
      <ProductList> 
        {products.map((product) => (
          <ProductCard key={product.title} product={product} onPurchase={handlePurchase} />))}
      </ProductList>

      <h2> Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />
        {products
          .filter(({ price}) => price >= filters.minPrice && price <= filters.maxPrice)
          .map(({ title,price }) => (
            <Fragment key={title}>
              <hr style={styles.ListDivider}/>
              <p style={styles.ListTitle}>
                {title} cost ${price}
              </p>
            </Fragment>
            )
          )
        }
      
    </div>
  );
}

export default App;