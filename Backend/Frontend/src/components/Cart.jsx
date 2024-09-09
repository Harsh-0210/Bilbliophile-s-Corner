import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../Store/store';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 mb-4 border-b">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
