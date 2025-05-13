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