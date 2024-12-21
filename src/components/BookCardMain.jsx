import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import bookIcon from "../assets/books.svg";

function BookCard({ book }) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для отображения модального окна
    const [notification, setNotification] = useState(null); // Состояние для уведомления

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const showNotification = (message, color) => {
        setNotification({ message, color });
        setTimeout(() => setNotification(null), 1000); // Уведомление исчезает через 1 секунду
    };

    return (
        <>
            {/* Уведомление */}
            {notification && (
                <div
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md z-50 text-white`}
                    style={{ backgroundColor: notification.color }}
                >
                    {notification.message}
                </div>
            )}

            {/* Карточка */}
            <div
                className="w-[230px] h-[300px] bg-white border-2 border-gray-800 shadow-[4px_4px_0px_0px] shadow-gray-800 rounded-md flex flex-col p-5 gap-3 cursor-pointer relative"
                onClick={openModal}
            >
                {/* Изображение */}
                <div className="flex justify-center">
                    <img
                        src={book.image || bookIcon}
                        alt={book.title}
                        className="w-[100px] h-[100px] object-contain"
                    />
                </div>

                {/* Название книги */}
                <div className="text-lg font-medium text-gray-800 text-center">
                    {book.title}
                </div>

                {/* Описание книги */}
                <div className="text-sm font-normal text-gray-600 text-center">
                    {book.description || "Нет описания."}
                </div>

                {/* Разделитель */}
                <hr className="border-gray-800 rounded-full" />

                {/* Цена и кнопки */}
                <div className="flex justify-between items-center">
                    <div className="text-lg font-medium text-gray-800">
                        <span className="text-gray-600">$</span> {book.price || "N/A"}
                    </div>
                    <div className="flex gap-2">
                        {/* Кнопка добавления в корзину */}
                        <button
                            className="w-[35px] h-[35px] bg-white border-2 border-gray-800 rounded-md flex items-center justify-center hover:border-blue-500 transition duration-300 active:translate-y-[3px]"
                            onClick={(e) => {
                                e.stopPropagation(); // Предотвращает открытие модального окна
                                dispatch(addToCart({ book, quantity: 1 }));
                                showNotification("Вы успешно добавили книгу в корзину!", "#347aeb"); // Зеленый цвет для корзины
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-5 h-5 fill-gray-800 hover:fill-blue-500 transition duration-300"
                            >
                                <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48-27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                            </svg>
                        </button>

                        {/* Кнопка добавления в избранное */}
                        <button
                            className="w-[35px] h-[35px] bg-white border-2 border-gray-800 rounded-md flex items-center justify-center hover:border-red-500 transition duration-300 active:translate-y-[3px]"
                            onClick={(e) => {
                                e.stopPropagation(); // Предотвращает открытие модального окна
                                showNotification("Вы успешно добавили книгу в избранное!", "#eb3a34"); // Оранжевый цвет для избранного
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                className="fill-gray-800 hover:fill-red-500 transition duration-300"
                            >
                                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Модальное окно с информацией о книге */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="w-[90%] max-w-[400px] bg-white border-2 border-gray-800 shadow-[4px_4px_0px_0px] shadow-gray-800 rounded-md p-6 flex flex-col gap-4"
                        onClick={(e) => e.stopPropagation()} // Останавливает закрытие при клике внутри модального окна
                    >
                        {/* Заголовок */}
                        <h2 className="text-xl font-medium text-gray-800 text-center">
                            {book.title}
                        </h2>

                        {/* Изображение */}
                        <div className="flex justify-center">
                            <img
                                src={book.image || bookIcon}
                                alt={book.title}
                                className="w-[150px] h-[150px] object-contain"
                            />
                        </div>

                        {/* Описание */}
                        <p className="text-sm font-normal text-gray-600 text-center">
                            {book.description || "Нет описания."}
                        </p>

                        {/* Цена */}
                        <div className="text-lg font-medium text-gray-800 text-center">
                            Цена: <span className="text-gray-600">$</span> {book.price || "N/A"}
                        </div>

                        {/* Кнопки */}
                        <div className="flex justify-between">
                            <button
                                className="px-4 py-2 bg-gray-200 text-gray-800 border-2 border-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
                                onClick={closeModal}
                            >
                                Закрыть
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                                onClick={() => {
                                    dispatch(addToCart({ book, quantity: 1 }));
                                    showNotification("Вы успешно добавили книгу в корзину!", "#4CAF50"); // Зеленый цвет
                                    closeModal();
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
