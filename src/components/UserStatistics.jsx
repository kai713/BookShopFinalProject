import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/UserSlice";

const UserStatistics = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    booksRead: user.booksRead,
    goal: user.goal,
  });

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-xl mx-auto animate-slideIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Статистика пользователя</h2>
      {!isEditing ? (
        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between">
            <span>Прочитано книг:</span>
            <span className="font-semibold">{user.booksRead}</span>
          </li>
          <li className="flex justify-between">
            <span>Цель:</span>
            <span className="font-semibold">{user.goal} книг</span>
          </li>
        </ul>
      ) : (
        <form onSubmit={handleSave} className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Прочитано книг:</label>
            <input
              name="booksRead"
              value={formData.booksRead}
              onChange={handleChange}
              type="number"
              className="px-4 py-2 border rounded-md shadow w-32"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Цель:</label>
            <input
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              type="number"
              className="px-4 py-2 border rounded-md shadow w-32"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md shadow-md hover:bg-purple-600 transition"
          >
            Сохранить изменения
          </button>
        </form>
      )}
      <button
        onClick={toggleEdit}
        className="mt-4 w-full py-2 flex items-center justify-center gap-2 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536M16.5 3.5a2.121 2.121 0 113 3l-12 12a4 4 0 01-1.5 1l-4 1 1-4a4 4 0 011-1.5l12-12z"
          />
        </svg>
        {isEditing ? "Скрыть Редактирование" : "Редактировать Статистику"}
      </button>
    </div>
  );
};

export default UserStatistics;