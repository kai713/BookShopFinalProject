import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import '../index.css';


const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const finalPrice = book.price - (book.discount || 0);

    return (
        <div className="border rounded-lg overflow-hidden bg-white p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
        {/* Изображение книги */}
        <img
            src={book.image || '/default-book-image.jpg'} // Замените на изображение книги или дефолтное
            alt={book.title}
            className="w-full h-48 object-cover mb-4 rounded-t-lg"
        />
    
        {/* Контент книги */}
        <div className="flex flex-col items-center">
            {/* Название книги */}
            <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                {book.title}
            </h3>
    
            {/* Автор книги */}
            <p className="text-sm text-gray-600 mb-4">
                {book.author?.name || "Автор неизвестен"}
            </p>
    
            {/* Цена с учётом скидки */}
            {book.discount > 0 ? (
                <p className="text-lg text-gray-500">
                    <span className="line-through">{book.price} KZT</span>{' '}
                    <span className="text-red-500 font-bold">{finalPrice} KZT</span>
                </p>
            ) : (
                <p className="text-lg text-blue-600 font-bold">
                    {book.price} KZT
                </p>
            )}
    
            {/* Статус наличия */}
            <p className="text-sm text-gray-700 mb-4">
                Статус: {book.stockQuantity > 0 ? (
                    <span className="text-green-500 font-semibold">В наличии</span>
                ) : (
                    <span className="text-red-500 font-semibold">Нет в наличии</span>
                )}
            </p>
        </div>
    
        {/* Кнопки действий */}
        <div className="flex justify-between items-center mt-4">
            {/* Кнопка "Подробнее" */}
            <Link
                to={`/books/${book.bookId}`}
                className="bg-blue-500 text-white text-sm px-3 py-2 rounded-md shadow hover:bg-blue-400"
            >
                Подробнее
            </Link>
    
            {/* Кнопка "В корзину" */}
            {book.stockQuantity > 0 && (
                <button
                    className="bg-green-500 text-white text-sm px-3 py-2 rounded-md shadow hover:bg-green-400"
                    onClick={() => dispatch(addToCart({ book, quantity: 1 }))}
                >
                    В корзину
                </button>
            )}
        </div>
    </div>
    
    );
};

export default BookCard;
