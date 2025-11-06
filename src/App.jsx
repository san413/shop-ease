import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col flex-1 items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 drop-shadow-sm">
          ShopEase 🛍️
        </h1>
        <p className="text-gray-700 mt-3 text-lg md:text-xl max-w-xl">
          Your smooth shopping experience starts here.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:scale-95 transition-transform duration-200 shadow-md"
        >
          Explore Products
        </button>

        {/* Routed Pages */}
        <section className="w-full max-w-5xl mt-16">
          <Outlet />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </footer>
    </div>
  );
}
