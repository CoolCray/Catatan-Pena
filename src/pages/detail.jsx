// src/App.js
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useNavigate } from "react-router-dom";

function detail() {

  const navigate = useNavigate();
  return (
    // Ganti w-screen dengan kelas yang lebih aman seperti min-h-screen bg-white
    <div className="min-h-screen w-screen">
      <Header />

      {/* Wadah Konten Utama */}
      {/* - max-w-4xl: Membatasi lebar maksimal konten agar tidak terlalu lebar di layar besar.
        - mx-auto: Membuat wadah ini berada di tengah (centering).
        - px-4 sm:px-6 lg:px-8: Padding horizontal yang responsif.
        - py-8 md:py-12: Padding vertikal yang responsif.
    */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-24 pb-8 md:py-12">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
          Stocks making the biggest
        </h1>

        {/* Gambar Utama */}
        <img
          className="w-full h-auto mx-auto rounded-2xl shadow-lg my-6 md:my-8"
          src="/konten1.png"
          alt="Stocks making the biggest"
        />

        {/* Detail Konten dengan class 'prose' */}
        {/* 'prose' dari Tailwind Typography sangat bagus untuk ini */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <blockquote className="border-l-4 border-[#1B998B] pl-4 italic text-gray-600 my-6">
            "por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure "
          </blockquote>

          <h3 className="font-bold mt-6 mb-2"> Sub-Judul Penting</h3>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>

          <blockquote className="border-l-4 border-[#1B998B] pl-4 italic text-gray-600 my-6">
            "Ini adalah bagian kutipan yang menarik dari artikel untuk
            menekankan sebuah poin penting."
          </blockquote>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus.
          </p>
        </div>

        {/* Pembatas */}
        <hr className="my-8 md:my-12" />

        {/* Komentar */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">Comments</h2>
          <div className="mt-4">
            <textarea
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#1B998B] focus:border-transparent transition"
              rows="4"
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-2 bg-[#1B998B] text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition-colors">
              Submit
            </button>
          </div>
          <div className="mt-6 space-y-4">
            <div className="mt-4">
              <p className="font-semibold">User1:</p>
              <p>Great article! I learned a lot.</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold">User2:</p>
              <p>Thanks for sharing this information!</p>
            </div>
          </div>
        </div>

        {/* Navigasi Postingan */}
        <div className="flex justify-between my-10 text-sm font-medium">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black"
          >
            ← Back to Home
          </button>
          <button className="text-gray-600 hover:text-black">
            Next Article →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default detail;
