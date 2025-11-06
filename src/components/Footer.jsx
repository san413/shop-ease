// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">ShopEase 🛍️</h2>

        <nav className="flex gap-6 text-sm">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="text-center text-sm text-gray-200 mt-6">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
