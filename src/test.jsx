// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cartItems={cart}
          closeModal={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;

// components/Navbar.jsx
import React from "react";

const Navbar = ({ cartCount, openModal }) => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button
        className="relative bg-blue-600 text-white px-4 py-2 rounded"
        onClick={openModal}
      >
        Cart
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-xs px-2 rounded-full">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;

// components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

// components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="mt-2 font-semibold text-sm line-clamp-2">{product.title}</h2>
      <p className="mt-1 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

// components/CartModal.jsx
import React from "react";

const CartModal = ({ cartItems, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-4 rounded">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart Items</h2>
          <button onClick={closeModal} className="text-red-600">Close</button>
        </div>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                <div>
                  <p className="font-semibold text-sm line-clamp-1">{item.title}</p>
                  <p className="text-sm font-bold">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModal;
