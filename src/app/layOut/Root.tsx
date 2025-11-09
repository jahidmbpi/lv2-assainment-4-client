import Footer from "@/extraComponents/footer/Footer";
import Navbar from "../pages/navbar/Navbar";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar></Navbar>

      <main className="grow">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
}
