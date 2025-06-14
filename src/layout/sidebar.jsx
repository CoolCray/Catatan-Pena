import { useNavigate } from "react-router-dom"

const content = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-2xl w-full h-full p-4 flex flex-col justify-between">
            <div className="flex gap-2 items-center mb-6 border-b pb-2">
                <img className="w-10" src="./public/profil.png" alt="" srcset="" />
                <div>
                    <h1>User</h1>
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/login')} className=" w-full rounded-sm bg-[#1B998B] ">Login</button>
            </div>
      </div>
      
    )
  }

export default content



