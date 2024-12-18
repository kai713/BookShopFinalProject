import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const finalPrice = book.price - (book.discount || 0);

    return (
        <div className="border p-4 flex flex-col">
            <div className="flex-1 mb-2">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p>{book.author.name}</p>
                {book.discount > 0 ? (
                    <p><span className="line-through">{book.price} KZT</span> <span className="text-red-500">{finalPrice} KZT</span></p>
                ) : (
                    <p>{book.price} KZT</p>
                )}
                <p>Статус: {book.stockQuantity > 0 ? "В наличии" : "Нет в наличии"}</p>
            </div>
            <div className="flex space-x-2">
                <Link to={`/books/${book.bookId}`} className="bg-blue-500 text-white px-2 py-1 rounded">Подробнее</Link>
                {book.stockQuantity > 0 && (
                    <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => dispatch(addToCart({ book, quantity: 1 }))}>
                        В корзину
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookCard;
