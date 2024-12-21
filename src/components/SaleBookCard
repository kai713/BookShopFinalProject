import React from 'react';

const SaleBookCard = ({ book }) => {
    return (
        <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 p-4 relative">
            {/* Скидка (плашка) */}
            {book.discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{book.discount}%
                </div>
            )}

            {/* Изображение */}
            <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-4 flex items-center justify-center">
                <img
                    src={book.imageData || 'https://via.placeholder.com/150'}
                    alt={book.title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Название книги */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {book.title}
            </h3>

            {/* Автор книги */}
            <p className="text-sm text-gray-500 mb-3 text-center">
                {book.authorName}
            </p>

            {/* Цена книги */}
            <div className="flex justify-center items-center space-x-2 mb-4">
                <span className="text-gray-400 line-through text-sm">
                    {book.originalPrice} {book.currency}
                </span>
                <span className="text-blue-600 font-bold text-lg">
                    {book.price} {book.currency}
                </span>
            </div>

            {/* Кнопка добавления в корзину */}
            <button
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                onClick={() => alert(`Добавлено в корзину: ${book.title}`)}
            >
                В корзину
            </button>
        </div>
    );
};

export default SaleBookCard;
