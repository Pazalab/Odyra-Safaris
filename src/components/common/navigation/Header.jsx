import { NavLink, Link } from "react-router-dom"
import Topbar from "./Topbar"
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import logo from "../../../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";

const Header = () => {
    // eslint-disable-next-line no-unused-vars
    const [sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  return (
    <header>
                <Topbar />
                <div className="inner-row">
                          <div className="header-content">
                                   <Link to={"/"} className="logo">
                                              <img src={logo} alt="Odyra Safaris Logo" />
                                    </Link>
                                   <nav>
                                             <ul>
                                                    <li><NavLink to={"/"}>Home</NavLink></li>
                                                    <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                    <li><NavLink to={"/destinations"}>Destinations</NavLink></li>
                                                    <li><NavLink to={"/itineraries"}>Itineraries</NavLink></li>
                                                    <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                             </ul>
                                   </nav>
                                   <div className="header-actions">
                                               <div className="action-box">
                                                          <h4><span><IoMdCall /></span> +61 4311 06503</h4>
                                               </div>
                                               <div className="action-box">
                                                         <Link to={"/"}>Book Now <span><LuCalendarCheck2 /></span></Link>
                                               </div>      
                                               <span className="menu-btn" onClick={() => setSidebarStatus(true)}><CgMenuRight /></span>                     
                                   </div>
                          </div>
                </div>
    </header>
  )
}

export default Header