import Sidebar from "./sidebar";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";


const Header = () => {
 // Inisialisasi useNavigate untuk navigasi 
  const navigate = useNavigate();

  // State untuk mengontrol visibilitas sidebar
  const [show, setshow] = useState(false);

  const sidebarklik = () => {
    setshow(true);
  };
  const isSidebarVisible = show ? "right-0" : "-right-50";
  const muncul = show ? "block" : "hidden";

  const outSidebar = () => {
    setshow(false);
  };

  return (
    // Navbar
    <div className="px-[16px] lg:px-10 ">
      <div className="flex justify-between items-center my-[30.5px] w-full">
        <img
          onClick={() => navigate("/")}
          className="w-56 h-auto"
          src="/Catatan Pena.svg"
          alt="Logo"
        />
        <img
          onClick={sidebarklik}
          className="h-10 cursor-pointer"
          src="/Hamburger.svg"
          alt="Hamburger"
        />
      </div>

      {/* Sidebar muncul jika isSidebarVisible true */}
      <div
        className={`bg-white fixed top-0 ${isSidebarVisible} w-44  h-full z-50 transition-all duration-500 shadow-2xl`}
      >
        <Sidebar />
      </div>
      <div
        onClick={outSidebar}
        className={`bg-amber-600  opacity-0 h-screen ${muncul} w-screen fixed z-10`}
      ></div>
    </div>
  );
};

export default Header;
