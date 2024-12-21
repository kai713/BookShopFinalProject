import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]); // Состояние для заказов
    const [sortedOrders, setSortedOrders] = useState([]); // Состояние для отсортированных заказов
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [error, setError] = useState(null); // Состояние для ошибок
    const [sortDirection, setSortDirection] = useState(null); // Состояние для направления сортировки

    useEffect(() => {
        // Загрузка данных из API
        const fetchOrders = async () => {
            try {
                const response = await axios.get("https://67657d72410f849996554b88.mockapi.io/order");
                setOrders(response.data);
                setSortedOrders(response.data);
            } catch (err) {
                setError("Ошибка загрузки данных.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleOpenDetails = (order) => {
        navigate(`/order/${order.id}`, { state: { order } });
    };

    const sortOrders = (direction) => {
        setSortDirection(direction);
        const sorted = [...orders].sort((a, b) => {
            if (direction === "asc") return a.order_id - b.order_id;
            if (direction === "desc") return b.order_id - a.order_id;
            return 0;
        });
        setSortedOrders(sorted);
    };

    if (loading) return <div className="text-center text-gray-500 text-lg mt-8">Загрузка...</div>;
    if (error) return <div className="text-center text-red-500 text-lg mt-8">{error}</div>;

    return (
        <div className="max-w-7xl mx-auto py-8 px-6 font-sans bg-gray-50">
            <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-8">Мои заказы</h1>
            <hr className="border-gray-300 mb-6" />

            {/* Кнопки сортировки */}
            <div className="flex justify-end mb-6 space-x-4">
                <button
                    onClick={() => sortOrders("asc")}
                    className={`px-4 py-2 rounded-md border-2 text-gray-800 font-bold transition ${
                        sortDirection === "asc"
                            ? "bg-gray-500 text-white border-gray-500"
                            : "bg-white border-gray-800 hover:bg-blue-100"
                    }`}
                >
                    Сортировать ↑ (ID)
                </button>
                <button
                    onClick={() => sortOrders("desc")}
                    className={`px-4 py-2 rounded-md border-2 text-gray-800 font-bold transition ${
                        sortDirection === "desc"
                            ? "bg-gray-500 text-white border-gray-500"
                            : "bg-white border-gray-800 hover:bg-blue-100"
                    }`}
                >
                    Сортировать ↓ (ID)
                </button>
            </div>

            <section>
                <h2 className="text-xl font-bold mb-4 text-gray-700">История заказов</h2>
                {sortedOrders.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedOrders.map((order) => (
                            <div
                                key={order.id}
                                className="relative bg-white border-4 border-gray-800 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out hover:translate-x-2 hover:translate-y-2 cursor-pointer mx-auto w-full max-w-[300px] h-[240px] flex flex-col justify-between"
                                onClick={() => handleOpenDetails(order)}
                            >
                                {/* Содержимое карточки */}
                                <div className="p-4">
                                    <p className="text-lg font-semibold text-gray-800 text-center">
                                        Заказ #{order.order_id}
                                    </p>
                                </div>

                                {/* Информация о заказе */}
                                <div className="bg-gray-100 border-t border-gray-800 p-4">
                                    <p className="text-sm font-semibold">
                                        Статус:{" "}
                                        <span
                                            className={
                                                order.stasus
                                                    ? "text-green-600 font-bold"
                                                    : "text-red-800 font-bold"
                                            }
                                        >
                                            {order.stasus ? "Выполнен" : "Обрабатывается"}
                                        </span>
                                    </p>
                                    <p className="text-sm">
                                        Сумма:{" "}
                                        <span className="text-gray-600 font-bold">
                                            {order.money} KZT
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">У вас пока нет заказов.</p>
                )}
            </section>
        </div>
    );
}

export default MyOrders;
