import { Outlet } from "react-router-dom"
import Navbar from "../pages/Home/Shared/Header/Navbar"
import Footer from "../pages/Home/Shared/Footer/Footer"


function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main