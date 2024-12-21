import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/WishlistSlice";

const WishlistItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.authorName}</p>
      <p className="text-sm text-gray-800">
        Цена: {book.price - (book.discount || 0)} KZT
      </p>
      <button
        onClick={() => dispatch(removeFromWishlist(book.id))}
        className="mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Удалить
      </button>
    </div>
  );
};

export default WishlistItem;
