import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; // Import action for adding to cart
import bookIcon from "../assets/books.svg";

function BookCard({ book }) {
    const dispatch = useDispatch(); // Initialize dispatch for calling Redux actions
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleCardClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <>
            {/* Карточка с информацией */}
            <div
                className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 transition-transform ease-in-out cursor-pointer"
                onClick={handleCardClick}
            >
                <div className="p-4">
                    {/* Блок с изображением */}
                    <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-4 flex items-center justify-center">
                        <img
                            src={bookIcon || "../assets/books.svg"}
                            alt={book.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Заголовок книги */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{book.title}</h3>

                    {/* Автор книги */}
                    <p className="text-sm text-gray-600 mb-3 text-center">{book.author}</p>

                    {/* Цена книги */}
                    <div className="text-base font-bold text-blue-600 mb-4 text-center">{book.price} KZT</div>

                    {/* Кнопка добавления в корзину */}
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-400 focus:ring focus:ring-blue-300 focus:outline-none"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent modal opening
                                dispatch(addToCart({ book, quantity: 1 }));
                            }}
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal} // Close modal on overlay click
                >
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
                    >
                        {/* Заголовок модального окна */}
                        <h2 className="text-xl font-bold mb-4">{book.title}</h2>

                        {/* Автор книги */}
                        <p className="text-sm text-gray-600 mb-2"><strong>Автор:</strong> {book.author}</p>

                        {/* Описание книги */}
                        <p className="text-gray-700 mb-4">
                            <strong>Описание:</strong> {book.description || "Описание недоступно."}
                        </p>

                        {/* Цена книги */}
                        <div className="text-base font-bold text-blue-600 mb-4">
                            <strong>Цена:</strong> {book.price} KZT
                        </div>

                        {/* Кнопки */}
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300"
                                onClick={closeModal}
                            >
                                Закрыть
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-400"
                                onClick={() => {
                                    dispatch(addToCart({ book, quantity: 1 }));
                                    closeModal(); // Close modal after adding to cart
                                }}
                            >
                                В корзину
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BookCard;
