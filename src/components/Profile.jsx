import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/UserSlice";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDs-BX8Lon9BVFOO1TXrraoI4xJ95Rd1tU",
  authDomain: "final-fron-7199f.firebaseapp.com",
  projectId: "final-fron-7199f",
  storageBucket: "final-fron-7199f.appspot.com",
  messagingSenderId: "160864198745",
  appId: "1:160864198745:web:1eb4c7a77bb97398d11148",
  measurementId: "G-2ZEXEEDRYS",
};

initializeApp(firebaseConfig);

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    avatarUrl: user.avatarUrl || "https://via.placeholder.com/150", // Default image
  });
  const [showCamera, setShowCamera] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setShowCamera(!isEditing);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, `avatars/${user.id || user.name}_${Date.now()}`);
      try {
        console.log("Uploading file...");
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        console.log("File uploaded. URL: ", url);

        // Update local state
        setFormData((prev) => ({ ...prev, avatarUrl: url }));

        // Update Redux Store
        dispatch(updateUser({ avatarUrl: url }));

        // Update on the backend
        await axios.put("/api/user/avatar", { avatarUrl: url });
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      console.log("Saving profile...");
      await axios.put("/api/user/update", formData);
      dispatch(updateUser(formData));
      setIsEditing(false);
      setShowCamera(false);
      console.log("Profile saved successfully.");
    } catch (error) {
      console.error("Error saving profile: ", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl mx-auto animate-fadeIn">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={formData.avatarUrl}
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          {showCamera && (
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 cursor-pointer"
            >
              <i className="bx bx-camera text-lg"></i>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">{formData.name}</h2>
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
            {formData.email}
          </li>
          <li className="flex items-center gap-3">
            <i className="bx bx-phone text-2xl text-blue-500"></i>
            {formData.phone}
          </li>
          <li className="flex items-center gap-3">
            <i className="bx bx-map text-2xl text-blue-500"></i>
            {formData.location}
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
            className="mt-4 w-full py-2 flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
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
                d="M5 13l4 4L19 7"
              />
            </svg>
            Сохранить изменения
          </button>
        </form>
      )}
      <button
        onClick={toggleEdit}
        className="mt-6 w-full py-2 flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
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
        {isEditing ? "Скрыть Редактирование" : "Редактировать Профиль"}
      </button>
    </div>
  );
};

export default Profile;
