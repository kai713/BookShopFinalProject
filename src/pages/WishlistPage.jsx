import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div>
      <h1>Ваш Wishlist</h1>
      {wishlist.length > 0 ? (
        wishlist.map((book) => <WishlistItem key={book.bookId} book={book} />)
      ) : (
        <p>Ваш wishlist пуст.</p>
      )}
    </div>
  );
};

export default WishlistPage;