import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [products] = useState([
    { id: 1, name: 'Product 1 mul                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ', price: 100.00 },
    { id: 2, name: 'Product 2', price: 200.00 },
    { id: 3, name: 'Product 3', price: 100.00 },
    { id: 4, name: 'Product 4', price: 150.00 },
    // Add more products here
  ]);

  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    const newTotal = calculateTotal([...cartItems, { ...product, quantity: 1 }]);
    setTotal(newTotal);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart.filter((item) => item.quantity > 0));

    const newTotal = calculateTotal(updatedCart);
    setTotal(newTotal);
  };

  const addAllProductsToCart = () => {
    const updatedCart = [...cartItems];

    products.forEach((product) => {
      const existingItem = updatedCart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
    });

    const newTotal = calculateTotal(updatedCart);
    setCartItems(updatedCart);
    setTotal(newTotal);
  };

  // Calculate the total count of all products in the cart
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList products={products} onAdd={addToCart} />
      <Cart items={cartItems} total={total} onAdd={addToCart} onRemove={removeFromCart} />
      {/* Display the total count and total price in the button */}
      <button onClick={addAllProductsToCart}>
        Add All Products ({totalCount}) 
      </button>
      <button onClick={calculateTotal}> Total Price: #{total.toFixed(2)}</button>
    </div>
  );
}

export default App;

