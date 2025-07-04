import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className=" mx-auto items-center  justify-center fixed top-0 left-0 right-0  z-50">
      <nav className="max-w-7xl mx-auto items-center p-5 rounded-lg justify-center ">
        <div className="flex justify-between items-center">
          <div>
            <img
              className="w-[4rem] rounded-lg"
              src="../../../../public/imagelogo.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 font-medium">
            <Link to="/">All Books</Link>
            <Link to="/addbook">Add book</Link>
            <Link to="/borrowsummary">Borrow Summary</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
