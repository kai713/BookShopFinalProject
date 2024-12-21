import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
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
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl mx-auto animate-fadeIn">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={user.avatarUrl}
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <button
            className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300"
            onClick={() => alert("Change profile picture")}
          >
            <i className="bx bx-camera text-lg"></i>
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">{user.name}</h2>
        <p className="text-gray-500 italic mt-2">{user.bio}</p>
        <p className="text-sm font-medium mt-1">
          {user.status === "Online" ? (
            <span className="text-green-500 animate-pulse">🟢 Online</span>
          ) : (
            <span className="text-gray-400">⚪ Offline</span>
          )}
        </p>
      </div>
      {!isEditing ? (
        <ul className="mt-6 space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <i className="bx bx-envelope text-2xl text-blue-500"></i>
            {user.email}
          </li>
          <li className="flex items-center gap-3">
            <i className="bx bx-phone text-2xl text-blue-500"></i>
            {user.phone}
          </li>
          <li className="flex items-center gap-3">
            <i className="bx bx-map text-2xl text-blue-500"></i>
            {user.location}
          </li>
        </ul>
      ) : (
        <form onSubmit={handleSave} className="mt-6 space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md shadow"
            placeholder="Имя"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md shadow"
            placeholder="Email"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md shadow"
            placeholder="Телефон"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md shadow"
            placeholder="Локация"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Сохранить изменения
          </button>
        </form>
      )}
      <button
        onClick={toggleEdit}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        {isEditing ? "Скрыть Редактирование" : "Редактировать Профиль"}
      </button>
    </div>
  );
};

export default Profile;
