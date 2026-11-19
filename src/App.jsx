import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  // State for dark mode 
  const [isDarkMode, setIsDarkMode] = useState(false);

  //state for cart
  const [cart, setCart] = useState([]);

  //state for category
  const [category, setCategory] = useState('all');

  // Add product to cart 
  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle
         darkMode={isDarkMode}
         setDarkMode={setIsDarkMode}
      />


      {/* Category filter */}
      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
   {/* Product list */}
      <ProductList 
        category={category}
        onAddToCart={addToCart}
        />

      {/* Shopping cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
