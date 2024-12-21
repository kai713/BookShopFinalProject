// src/components/WishlistItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/WishlistSlice';

const WishlistItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow-md mb-4">
      <div>
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.authorName}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromWishlist(book))}
        className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default WishlistItem;
