
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Header.css";
import { BiHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";




function Header() {
  return (

    <>
<header className="text-gray-600 body-font   ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-0">
    <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"  to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl" to="/">Tailblocks</span>
    </NavLink>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mb-4">
      <NavLink className="mr-5 hover:text-gray-900" to="/">Home</NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to="/products">Products</NavLink>
      <NavLink className="mr-5 hover:text-gray-900" to="/search">Search</NavLink>
      <NavLink className="mr-5 hover:text-gray-900">Fourth Link</NavLink>
    </nav>
    <NavLink className=" inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mb-5 md:mt-0" to="/login">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24" >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </NavLink>
  </div>
</header>



    </>

  )
}
export default Header;



