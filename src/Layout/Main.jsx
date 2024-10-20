import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Header/Navbar";
import Footer from "../pages/Home/Shared/Footer/Footer";

function Main() {
  const location = useLocation();
  const visualHeaderFooter =
    location.pathname.toLowerCase() === "/signin" ||
    location.pathname.toLowerCase() === "/signup";

  if (visualHeaderFooter) {
    return <Outlet></Outlet>;
  }
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;
