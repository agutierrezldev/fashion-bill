import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onLogOut = () => {
    navigate('/login', {
      replace: true
    })
  }

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


          <a className="text-white hover:text-gray-400" onClick={onLogOut}>
            Log Out
          </a>

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

            <a className="block py-2" onClick={onLogOut}>
              Log Out
            </a>
          </div>
        )}



      </nav>
    </>



  )
}
