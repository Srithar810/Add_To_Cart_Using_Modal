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