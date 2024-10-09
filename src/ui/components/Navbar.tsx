import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <>

      <nav className="flex justify-between items-center bg-slate-700 p-4">

        <div className="text-white text-2xl font-bold">
          <Link to="/">
            FashionBill
          </Link>
        </div>


        {/* Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="customers" className="text-white hover:text-gray-400">
            Customers
          </NavLink>

          <NavLink to="customers" className="text-white hover:text-gray-400">
            Log Out
          </NavLink>
        </div>

        {/* Mobile Menu Icon (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-700 text-white p-4 md:hidden">

            <NavLink to="customers" className="block py-2">
              Customers
            </NavLink>

            <NavLink to="customers" className="block py-2">
              Log Out
            </NavLink>
          </div>
        )}



      </nav>
    </>



  )
}
