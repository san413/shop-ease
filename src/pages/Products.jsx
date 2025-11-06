// src/pages/Products.jsx
import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://picsum.photos/id/180/400/300", // stable image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://picsum.photos/id/250/400/300",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$79",
    image: "https://picsum.photos/id/1080/400/300",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$59",
    image: "https://picsum.photos/id/430/400/300",
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: "$89",
    image: "https://picsum.photos/id/1011/400/300",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: "$120",
    image: "https://picsum.photos/id/1062/400/300",
  },
];

export default function Products() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-blue-600 font-medium mt-1">{product.price}</p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
