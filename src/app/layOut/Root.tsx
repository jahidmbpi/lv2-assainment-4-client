import { Outlet } from "react-router";
import Navbar from "../pages/navbar/Navbar";

export default function Root() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
