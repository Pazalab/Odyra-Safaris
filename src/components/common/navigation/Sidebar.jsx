import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { useContext, useEffect, useRef, useState } from "react"
import { sidebarContext } from "./navcontext"
import gsap from "gsap"
import { IoMdCall } from "react-icons/io";
import { PiMapPinLine } from "react-icons/pi";
import { BsEnvelopeAt } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();
  const [ dropdown, setDropdown ] = useState(false)
  const { pathname } = useLocation();

  useEffect(()=>{
         if(sidebarStatus){
               sidebarRef.current.classList.add("active")
               let tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                      y: 0,
                      duration: 0.8
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                     x: 0,
                     duration: 0.8
               })
         }else{
               let tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                     x: "-110%",
                     duration: 0.8
               })

               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                       y: "-100%",
                       duration: 0.8
               })

               setTimeout(() => {
                     sidebarRef.current.classList.remove("active")
               }, 2000)
         }
  }, [sidebarStatus])
  
  return (
    <div ref={sidebarRef} className="sidebar-section">
                <div className="sidebar-overlay"></div>
                <div className="sidebar-content">
                           <div className="sidebar-header">
                                      <Link to={"/"} className="logo">
                                                <img src={logo} alt="Odyra Safaris logo" />
                                       </Link>

                                       <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                           </div>
                           <div className="sidebar-nav">
                                  <ul>
                                        <li><NavLink to={"/"}>Home</NavLink></li>
                                        <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                        <li onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}><NavLink className="special" to={"/destinations"}>Destinations <span><IoIosArrowDown /></span></NavLink>
                                                               <div className={ dropdown ? "dropdown active" : "dropdown"}>
                                                                        <ul>
                                                                                  <li><NavLink to={'/destination/country/kenya'}>Kenya</NavLink></li>
                                                                                  <li><NavLink to={'/destination/country/uganda'}>Uganda</NavLink></li>
                                                                                  <li><NavLink to={'/destination/country/tanzania'}>Tanzania</NavLink></li>
                                                                                  <li><NavLink to={'/destination/country/rwanda'}>Rwanda</NavLink></li>
                                                                        </ul>
                                                               </div>
                                                    </li>
                                        <li><NavLink to={"/itineraries"} className={pathname.slice(1,10) == "itinerary" ? "active" : ""}>Itineraries</NavLink></li>
                                        <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                 </ul>
                           </div>

                           <div className="extra-details">
                                    <div className="extra-column">
                                               <h4>Contact Details</h4>
                                                            
                                    </div>
                                    <div className="extra-column">
                                             <h4>Let&apos;s Connect</h4>
                                             <p><span><BsEnvelopeAt /></span>info@odyrasafaris.com.au</p>     
                                             {/* <ul>
                                                       <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                       <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                       <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                       <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                             </ul> */}
                                    </div>
                                    <div className="extra-column">
                                              <h5>Australia</h5>
                                               <p><span><PiMapPinLine /></span>Winton Rd, Joondalup WA 6027</p>
                                               <p><span><IoMdCall /></span>+61 4311 06503</p>  
                                    </div>
                                    <div className="extra-column">
                                              <h5>Kenya</h5>
                                              <p><span><PiMapPinLine /></span>Yaya Center, Kilimani Nairobi</p>
                                              <p><span><IoMdCall /></span>+254 7926 40999</p>      
                                    </div>
                           </div>
                </div>
    </div>
  )
}

export default Sidebar