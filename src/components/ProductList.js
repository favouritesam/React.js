// src/components/ProductList.js
import React from 'react';

function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Price: #{product.price.toFixed(2)}
            <button onClick={() => onAdd(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
