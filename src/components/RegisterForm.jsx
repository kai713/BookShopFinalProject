import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticateUser(formData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 tracking-wide">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-4">
            <i className="bx bx-user text-gray-500 mr-3"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-4">
            <i className="bx bx-envelope text-gray-500 mr-3"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-4">
            <i className="bx bx-phone text-gray-500 mr-3"></i>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
              pattern="^\\+?[1-9]\d{1,14}$"
              title="Phone number should be in international format, e.g., +1234567890"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-6">
            <i className="bx bx-lock text-gray-500 mr-3"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
            <i
              className={`bx ${showPassword ? "bx-show" : "bx-hide"} text-gray-500 cursor-pointer ml-3`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
