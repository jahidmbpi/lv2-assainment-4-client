import { Outlet } from "react-router";
import Navbar from "../pages/navbar/Navbar";
import Footer from "@/extraComponents/footer/Footer";

export default function Root() {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
