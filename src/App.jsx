import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-5xl font-bold text-blue-600">ShopEase 🛍️</h1>
        <p className="text-gray-700 mt-3 text-lg">
          Your smooth shopping experience starts here.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explore Products
        </button>
      </main>
      <Outlet />
    </div>
  );
}