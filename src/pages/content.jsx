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
      "Pengembangan", // Self-Improvement
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
      "Produktifitas", // Productivity
    ];
    
  return (
    <div className="px-[16px]">
        <div className='w-full h-32 overflow-hidden rounded-3xl items-center justify-center flex'>
            <img className=' w-full' src="\public\banner.png" alt="" />
        </div>
        <h2 className='text-black font-medium text-4xl pt-[15px]'>news</h2>
        <div className='cols-2 grid grid-cols-3 gap-7 mt-3'>
            <div className='col-span-2 '>
                {konten.map((item, idx) => (
                <div onClick={() => navigate('/detail')} className='h-[300px] shadow-xl rounded-xl overflow-hidden flex flex-col mb-[16px]'>
                    <div className='h-2/3 overflow-hidden items-center justify-center flex'>
                        <img className='h-full' src={item.image} alt="" />
                    </div>
                    <div className='h-1/3 m-[12px] overflow-hidden '>
                        <h3 className='text-xl font-medium '>{item.title} </h3>
                        <p className='text-[12px]'>{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-4 bg p-4 shadow-xl rounded-xl items-center text-[12px] mb-[16px]'>
            <h3 className='font-semibold text-sm'>Categories</h3>
            {Categories.map((category, index) => (
            <a key={index} href="" className='text-[#1B998B] hover:underline text-center'>{category}</a>
            ))}
            </div>
        </div>
        
        <div className='flex justify-center items-center my-5'>
            <button className='bg-[#EFEFEF] px-4 py-2 rounded-full'>1</button>
            <button className='bg-[#EFEFEF] px-4 py-2 rounded-full ml-2'>2</button>
            <button className='bg-[#EFEFEF] px-4 py-2 rounded-full ml-2'>3</button>
            <button className='bg-[#EFEFEF] px-4 py-2 rounded-full ml-2'>4</button>
            <button className='bg-[#EFEFEF] px-4 py-2 rounded-full ml-2'>5</button>
        </div>
    </div>
  )
}

export default content