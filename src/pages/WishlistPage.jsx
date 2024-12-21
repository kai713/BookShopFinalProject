import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((book) => (
            <WishlistItem key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
