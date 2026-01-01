import React, { useState, useEffect } from "react";
import "../App.css";

function Products({ searchTerm }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!filteredProducts.length) {
    return <div>No products found.</div>;
  }

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default Products;
