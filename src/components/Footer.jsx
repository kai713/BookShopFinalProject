import React from 'react';
import '../index.css';
const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto text-center px-4">
                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                    <a href="#about" className="text-base md:text-lg hover:underline">
                        ABOUT US
                    </a>
                    <a href="#products" className="text-base md:text-lg hover:underline">
                        PRODUCTS
                    </a>
                    <a href="#awards" className="text-base md:text-lg hover:underline">
                        AWARDS
                    </a>
                    <a href="#help" className="text-base md:text-lg hover:underline">
                        HELP
                    </a>
                    <a href="#contact" className="text-base md:text-lg hover:underline">
                        CONTACT
                    </a>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 mb-6">
                    Explore the world of books with us! We offer a wide selection of literary works for all ages and interests. Enjoy reading and discover your new favorite books on our site.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    {/* Replace the empty <a> tags with actual icons or content */}
                    <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                        {/* Example: Facebook Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                        {/* Example: Twitter Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                        {/* Example: Instagram Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.004.25 2.47.415a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.165.466.357 1.264.415 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 2.004-.415 2.47a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.466.165-1.264.357-2.47.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-2.004-.25-2.47-.415a4.92 4.92 0 0 1-1.675-1.09 4.92 4.92 0 0 1-1.09-1.675c-.165-.466-.357-1.264-.415-2.47C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-2.004.415-2.47a4.92 4.92 0 0 1 1.09-1.675 4.92 4.92 0 0 1 1.675-1.09c.466-.165 1.264-.357 2.47-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.131 4.755.303 3.947.621a7.07 7.07 0 0 0-2.556 1.677A7.07 7.07 0 0 0 .621 4.854c-.318.808-.49 1.824-.549 3.105C0 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.059 1.281.231 2.297.549 3.105a7.07 7.07 0 0 0 1.677 2.556 7.07 7.07 0 0 0 2.556 1.677c.808.318 1.824.49 3.105.549C8.332 24 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.059 2.297-.231 3.105-.549a7.07 7.07 0 0 0 2.556-1.677 7.07 7.07 0 0 0 1.677-2.556c.318-.808.49-1.824.549-3.105.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.059-1.281-.231-2.297-.549-3.105a7.07 7.07 0 0 0-1.677-2.556A7.07 7.07 0 0 0 19.105.621c-.808-.318-1.824-.49-3.105-.549C15.668.014 15.259 0 12 0z"/>
                            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                            <circle cx="18.406" cy="5.594" r="1.44"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                        {/* Example: LinkedIn Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.133 1.445-2.133 2.938v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.368-1.849 3.6 0 4.266 2.372 4.266 5.455v6.283zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm md:text-base text-gray-400">
                    &copy; 2024 Copyright:
                    <a href="/" className="hover:underline ml-1">Библеотечная</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
