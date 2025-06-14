// src/App.js
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useNavigate } from "react-router-dom";

function detail() {

  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <Header />
      <div className="px-[24px]">
        {/* Judul */}
        <h1 className="text-xl font-medium mb-2">Stocks making the biggest </h1>

        {/* Gambar */}
        <img
          className="w-full h-auto mx-auto rounded-2xl"
          src="/konten1.png"
          alt="Logo"
        />

        {/* Detail konten */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <h3 className="font-bold mt-6 mb-2">Sebuah Sub-Judul Penting</h3>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>

          <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 my-6">
            "Ini adalah bagian kutipan yang menarik dari artikel untuk
            menekankan sebuah poin penting."
          </blockquote>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus.
          </p>
        </div>

        {/* Komentar */}
        <div>
          <h2 className="text-lg font-semibold mt-4">Comments</h2>
          <div className="mt-2">
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-2 bg-[#1B998B] text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
          <div className="mt-4">
            <p className="font-semibold">User1:</p>
            <p>Great article! I learned a lot.</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold">User2:</p>
            <p>Thanks for sharing this information!</p>
          </div>
        </div>

        {/* Buat Navigation */}
        <div className="flex justify-between my-10 text-sm">
          <button onClick={() => navigate("/")}> ← Back </button>
          <button>Next →</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default detail;
