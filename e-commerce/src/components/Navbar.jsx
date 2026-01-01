import React, { useState } from "react";
import { LucideShoppingCart } from "lucide-react";

function Navbar({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value); 
  };

  
  const handleSearch = () => {
    setSearchTerm(inputValue.trim());
  };

  return (
    <nav className="navbar">
      <p>Shopping App</p>
      <p>ShopEasy</p>
      <p>Digital Mall</p>
      <LucideShoppingCart className="cart-icon" />

      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </nav>
  );
}

export default Navbar;

