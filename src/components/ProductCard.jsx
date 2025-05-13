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