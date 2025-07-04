import { Outlet } from "react-router";
import Navbar from "../pages/navbar/Navbar";

export default function Root() {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
