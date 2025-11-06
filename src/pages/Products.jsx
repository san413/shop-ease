export default function Products() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartwatch", price: 149, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bluetooth Speaker", price: 79, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Gaming Mouse", price: 59, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
