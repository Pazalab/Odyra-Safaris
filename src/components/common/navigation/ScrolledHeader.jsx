import { NavLink, Link } from "react-router-dom"
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import logo from "../../../assets/logo.png"
import { useContext, useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { sidebarContext } from "./navcontext";

const ScrolledHeader = () => {
   const [active, setActive] = useState(false)
   const [ dropdown, setDropdown ] = useState(false)
   // eslint-disable-next-line no-unused-vars
   const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  useEffect(() => {
         window.addEventListener("scroll", () => {
                 if(window.scrollY > 100){
                       setActive(true)
                 }else{
                      setActive(false)
                 }
         })
  }, [])
  return (
    <header className={ active ? "onScroll active" : "onScroll"}>
             <div className="inner-row">
                       <div className="header-content">
                                <Link to={"/"} className="logo">
                                           <img src={logo} alt="Odyra Safaris Logo" />
                                 </Link>
                                <nav>
                                          <ul>
                                                 <li><NavLink to={"/"}>Home</NavLink></li>
                                                 <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                 <li onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}><NavLink to={"/destinations"}>Destinations</NavLink>
                                                               <div className={ dropdown ? "dropdown active" : "dropdown"}>
                                                                        <ul>
                                                                                  <li><NavLink to={'/destination/kenya'}>Kenya</NavLink></li>
                                                                                  <li><NavLink to={'/destination/uganda'}>Uganda</NavLink></li>
                                                                                  <li><NavLink to={'/destination/tanzania'}>Tanzania</NavLink></li>
                                                                                  <li><NavLink to={'/destination/rwanda'}>Rwanda</NavLink></li>
                                                                        </ul>
                                                               </div>
                                                    </li>
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

export default ScrolledHeader