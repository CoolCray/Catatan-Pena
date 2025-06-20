// src/App.js
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useNavigate } from "react-router-dom";

function login() {

  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <Header />
      <div className="px-[24px] justify-center items-center flex flex-col h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg  w-full max-w-sm">
          {/* Bagian Ikon Avatar */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-200 rounded-full p-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/profil.png"
                alt=""
                srcSet=""
              />
            </div>
          </div>

          {/* Form */}
          <form>
            {/* Grup Input Username */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Grup Input Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Tombol Login */}
            <div className="">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        {/* Buat Navigation */}
        <div className="flex w-full lg:px-14 sm:px-10 justify-between my-10 text-sm ">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black"
          >
            ← Back to Home
          </button>
          <button className="text-gray-600 hover:text-black">
            
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default login;
