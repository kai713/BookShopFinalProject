import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../store/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 tracking-wide">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-4 group">
            <i className="bx bx-envelope text-xl text-gray-500"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 pb-2 mb-6 group">
            <i className="bx bx-lock text-xl text-gray-500"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-3 outline-none text-gray-700 placeholder-gray-400 focus:placeholder-gray-500"
            />
            <i
              className={`bx ${showPassword ? "bx-show" : "bx-hide"} text-xl text-gray-500 cursor-pointer`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          <p>
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
