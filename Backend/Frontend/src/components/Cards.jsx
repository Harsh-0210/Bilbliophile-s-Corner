import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/store"; // Make sure this action exists in your Redux store

function Cards({ item }) {
  const dispatch = useDispatch();

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    
    dispatch(addItem(item)); // Dispatches action to add the item to the cart
  };

  return (
    <div className="mt-4 my-3 p-3 max-w-xs mx-auto">
      <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden h-[450px] w-full dark:bg-slate-900 dark:text-white dark:border hover:scale-105 transition-transform duration-200">
        <figure className="w-full h-48">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {item.name}
              <span className="ml-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-md">
                {item.category}
              </span>
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{item.title}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-lg font-bold dark:text-white">${item.price}</span>
            <button
              onClick={handleAddToCart}
              className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
