import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="mt-5">
      <nav className="max-w-7xl mx-auto items-center p-5 bg-green-500 rounded-lg ">
        <div className="flex justify-between">
          <div>
            <h2>logo</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Link to="/">All Books</Link>
            <Link to="/addbook">Add book</Link>
            <Link to="/borrowsummary">Borrow Summary</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
