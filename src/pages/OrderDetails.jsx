import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function OrderDetails() {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const order = location.state?.order; // Получаем данные заказа из state

    if (!order) {
        return (
            <div className="text-center text-red-500 text-xl font-bold mt-8">
                Заказ не найден
            </div>
        );
    }

    return (
        <div className="max-w-4xl mb-10 mx-auto py-8 px-4 font-sans bg-gray-50">
            {/* Кнопка "Назад" */}
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 shadow-md transition-all"
            >
                Назад
            </button>

            {/* Заголовок */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Детали заказа #{order.order_id}
            </h1>
            <hr className="border-gray-300 mb-6" />

            {/* Список книг */}
            <div className="mb-8 border-4 border-gray-700 rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold text-gray-700 p-4 border-b-4 border-gray-700">
                    Список книг
                </h2>
                {order.details?.books?.length > 0 ? (
                    <ul className="space-y-4 p-4">
                        {order.details.books.map((book, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img
                                    src={book.image || "https://via.placeholder.com/150"}
                                    alt={book.title}
                                    className="w-20 h-28 object-cover border rounded-lg"
                                />
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-gray-800">
                                        {book.title}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Автор: {book.author}
                                    </span>
                                    <span className="text-md text-gray-700">
                                        Цена:{" "}
                                        <span className="text-blue-500 font-bold">
                                            {book.price} грн
                                        </span>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600 text-lg p-4">Книги отсутствуют</p>
                )}
            </div>

            {/* Адрес доставки */}
            <div className="mb-8 border-4 border-gray-700 rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold text-gray-700 p-4 border-b-4 border-gray-700">
                    Адрес доставки
                </h2>
                <p className="text-gray-600 text-lg p-4">
                    {order.details?.address || "Адрес не указан"}
                </p>
            </div>

            {/* Итоговая сумма */}
            <div className="border-4 border-gray-700 rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold text-gray-700 p-4 border-b-4 border-gray-700">
                    Итоговая сумма
                </h2>
                <p className="text-3xl font-bold text-gray-700 p-4">
                    {order.money} KZT
                </p>
            </div>
        </div>
    );
}

export default OrderDetails;
