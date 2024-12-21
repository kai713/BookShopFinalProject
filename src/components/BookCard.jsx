// src/components/BookCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/WishlistSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlist.some((item) => item.id === book.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(book.id));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
      <p className="text-sm text-gray-600">{book.description}</p>
      <p className="text-lg font-bold text-gray-800 mt-2">{book.price} KZT</p>
      <button
        className={`mt-4 px-4 py-2 w-full rounded ${
          isInWishlist ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
        onClick={handleWishlistClick}
      >
        {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default BookCard;
