import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-8"> <div className="container mx-auto text-center"> {/* Верхний блок с ссылками */} <div className="flex justify-center space-x-8 mb-6"> <a href="#about" className="text-white hover:underline"> ABOUT US </a> <a href="#products" className="text-white hover:underline"> PRODUCTS </a> <a href="#awards" className="text-white hover:underline"> AWARDS </a> <a href="#help" className="text-white hover:underline"> HELP </a> <a href="#contact" className="text-white hover:underline"> CONTACT </a> </div> {/* Описание */} <p className="text-sm text-gray-300 mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quae voluptatibus placeat nam. Commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas. </p> {/* Иконки социальных сетей */} <div className="flex justify-center space-x-6 mb-6"> <a href="#" className="text-gray-300 hover:text-white"> </a> <a href="#" className="text-gray-300 hover:text-white"> </a> <a href="#" className="text-gray-300 hover:text-white"> </a> <a href="#" className="text-gray-300 hover:text-white"> </a> <a href="#" className="text-gray-300 hover:text-white"> </a> <a href="#" className="text-gray-300 hover:text-white"> </a> </div> {/* Нижняя строка */} <p className="text-sm text-gray-400"> &copy; 2024 Copyright: <a href="/" className="hover:underline">YourWebsiteName</a> </p> </div> </footer>
    );
};

export default Footer;
