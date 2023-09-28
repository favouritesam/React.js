// src/components/Cart.js
import React from 'react';

function Cart({ items, onAdd, onRemove }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => onAdd(item)}>Add</button>
            <button onClick={() => onRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
