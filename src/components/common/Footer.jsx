import { Link } from "react-router-dom"
import { IoMdCall } from "react-icons/io";
import logo from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiMapPinLine } from "react-icons/pi";
import { BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
               <div className="inner-row">
                        <div className="footer-content">
                                   <div className="footer-logo">
                                               <img src={logo} alt="odyra safaris logo" />
                                   </div>
                                   <div className="footer-row">
                                              <div className="footer-column">
                                                           <h3>Company</h3>
                                                           <ul>
                                                                    <li><Link to={"/"}>Home</Link></li>
                                                                    <li><Link to={"/about-us"}>About Us</Link></li>
                                                                    <li><Link to={"/destinations"}>Destinations</Link></li>
                                                                    <li><Link to={"/itineraries"}>Itineraries</Link></li>
                                                           </ul>
                                              </div>
                                              <div className="footer-column split">
                                                           <div className="footer-details">
                                                                      <h3>Get in Touch</h3>

                                                                      <p><IoMdCall /> +61 4311 06503</p>                                                   
                                                                      <p><span><BsEnvelopeAt /></span>info@odyrasafaris.com.au</p>
                                                                      
                                                                      <h4>Office</h4>
                                                                      <div className="office-grid">
                                                                                  <div className="office-grid-column">
                                                                                            <h5>Australia</h5>
                                                                                            <p><span><PiMapPinLine /></span>Winton Rd, Joondalup WA 6027</p>
                                                                                  </div>
                                                                                  <div className="office-grid-column">
                                                                                             <h5>Kenya</h5>
                                                                                              <p><span><PiMapPinLine /></span>Yaya Center, Kilimani - Nairobi</p>
                                                                                  </div>
                                                                      </div>
                                                           </div>

                                                           <div className="social-links">
                                                                    <h3>Social Media</h3>
                                                                    <ul>
                                                                            <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                                            <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                            <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                            <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                   </ul>                             
                                                           </div>
                                              </div>
                                   </div>
                        </div>
                        <div className="copyright">
                                   <p>All rights reserved &copy; {new Date().getFullYear()} Odyra Safaris&trade;</p>
                        </div>
               </div>
    </footer>
  )
}

export default Footer