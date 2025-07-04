import { Outlet } from "react-router";
import Navbar from "../pages/navbar/Navbar";
import Banner from "@/extraComponents/Banner";

export default function Root() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
