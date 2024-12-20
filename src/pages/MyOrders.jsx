import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]); // Состояние для заказов
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    // Загрузка данных из API
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://67657d72410f849996554b88.mockapi.io/order");
        console.log("Данные заказов:", response.data); // Выводим данные в консоль для проверки
        setOrders(response.data);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOpenDetails = (order) => {
    navigate(`/order/${order.id}`, { state: { order } }); // Передаем данные через state
  };

  if (loading) return <div className="text-center text-gray-500">Загрузка...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 font-sans">
      <h1 className="text-center text-2xl font-extrabold mb-6">Мои заказы</h1>
      <hr className="border-gray-300 mb-6" />

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">История заказов</h2>
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4">
            <div className="flex flex-col gap-2">
              <span className="text-gray-700">Номер заказа: {order.order_id}</span>
              <span className="text-gray-700">Дата: {new Date(order.data * 1000).toLocaleDateString()}</span>
              <span className="text-gray-700">
                Статус:{" "}
                <span
                  className={
                    order.stasus
                      ? "text-green-600 font-semibold"
                      : "text-yellow-500 font-semibold"
                  }
                >
                  {order.stasus ? "Выполнен" : "Обрабатывается"}
                </span>
              </span>
              <span className="text-gray-700">Сумма: {order.money} грн</span>
            </div>
            <button
              onClick={() => handleOpenDetails(order)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            >
              Детали
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MyOrders;
