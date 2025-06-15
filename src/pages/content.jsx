import { useNavigate } from "react-router-dom"

const content = () => {

    const navigate = useNavigate();
    const konten = [
        {
            id: 1,
            title: "Stocks making the biggest",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/public/konten1.png",
        },

        {
            id: 2,
            title: "Self Improvement",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/public/konten2.png",
        },
        {
            id: 3,
            title: "Technology Trends",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "Health and Wellness",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
        },
    ]

    const Categories = [
      // Kategori Utama
      "Perjalanan", // Travel & Adventure
      "Kesehatan", // Health & Wellness
      "Teknologi", // Technology
      "Gaya Hidup", // Lifestyle
      "Makanan & Minuman", // Food & Drink
      "Keuangan", // Finance & Business
      "Olahraga", // Sports
      "Seni & Budaya", // Arts & Culture
      "Otomotif", // Automotive

      // Sub-kategori atau Kategori Spesifik
      "Fesyen", // Fashion
      "Kecantikan", // Beauty
      "Hubungan", // Relationships
      "Karier", // Career
      "Pendidikan", // Education
      "Sains", // Science
      "Gaming", // Gaming
      "Film & Serial TV", // Movies & TV Shows
      "Musik", // Music
      "Fotografi", // Photography
      "Parenting", // Parenting
      "Dekorasi Rumah", // Home Decor
      "Sejarah", // History
      "Berita", // News
    ];
    
  return (
    <div className="px-4 md:px-8 lg:px-16 ">
      {/* --- Banner --- */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden rounded-3xl flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src="/banner.png"
          alt="Banner Berita"
        />
      </div>

      {/* --- Judul Halaman --- */}

      <div className="flex justify-between mt-6 md:mt-8 items-center  md:pt-8">
        <h2 className="text-black font-medium text-3xl md:text-4xl lg:text-5xl ">
          News
        </h2>
        {/* search bar */}
        <div className="flex items-center w-1/2 h-1/3  bg-white rounded-xl shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm md:text-base  "
          />
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Layout Utama (Konten & Kategori) --- */}
      {/* PERUBAHAN UTAMA: Menggunakan grid-cols-3 sebagai default */}
      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-5">
        {/* --- Kolom Konten Utama (Kiri) --- */}
        {/* PERUBAHAN UTAMA: col-span-2 aktif di semua ukuran layar */}
        <div className="col-span-2">
          {konten.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/detail")}
              // Kartu tetap vertikal di HP, dan bisa horizontal di layar lebih besar
              className="shadow-xl rounded-xl overflow-hidden flex flex-col mb-6 cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Gambar Konten */}
              <div className="w-full h-40 md:h-48 flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Deskripsi Konten */}
              <div className="flex flex-col justify-center p-3 md:p-4">
                <h3 className="text-base md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Kolom Kategori (Kanan/Sidebar) --- */}
        <div className="col-span-1">
          <div className="sticky top-8 bg-white p-3 md:p-6 shadow-xl rounded-xl flex flex-col items-center gap-3 md:gap-4">
            <h3 className="font-bold text-base md:text-lg border-b-2 border-gray-200 pb-2 w-full text-center">
              Categories
            </h3>
            {Categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-[#1B998B] hover:underline text-center text-sm md:text-base"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Tombol Paginasi --- */}
      <div className="flex justify-center text-sm items-center my-8 text-gray-700">
        {/* Tombol-tombol paginasi ... */}
        <button className=" hover:bg-gray-300 px-4 py-2 rounded-full font-mono">
          1
        </button>
        <button className=" hover:bg-gray-300 px-4 py-2 rounded-full ml-2 font-mono">
          2
        </button>
        <button className=" hover:bg-gray-300 px-4 py-2 rounded-full ml-2 font-mono">
          3
        </button>
      </div>
    </div>
  );
}

export default content