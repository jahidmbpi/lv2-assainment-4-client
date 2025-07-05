import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 bg-gray-400/10 rounded-lg">
        <div className="flex justify-between items-center py-3">
          <div>
            <img className="w-16 rounded-lg" src="/imagelogo.webp" alt="Logo" />
          </div>

          <div className="sm:hidden">
            {!open ? (
              <GiHamburgerMenu
                onClick={() => setOpen(true)}
                className="text-3xl text-black cursor-pointer"
              />
            ) : (
              <IoCloseSharp
                onClick={() => setOpen(false)}
                className="text-3xl text-black cursor-pointer"
              />
            )}
          </div>

          {/* Links */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
            } sm:static absolute top-20 left-0 sm:top-0 w-full sm:w-auto bg-gray-300/10 sm:bg-transparent transition-transform duration-300 sm:flex sm:translate-x-0 px-4`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 font-medium text-white py-4 sm:py-0">
              <Link to="/">All Books</Link>
              <Link to="/addbook">Add Book</Link>
              <Link to="/borrowsummary">Borrow Summary</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
