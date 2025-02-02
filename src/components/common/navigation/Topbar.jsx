import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiMapPinLine } from "react-icons/pi";
import { BsEnvelopeAt } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="topbar">
            <div className="inner-row">
                    <div className="topbar-content">
                          <div className="topbar-column">
                                     <ul>
                                               <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                               <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                               <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                               <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                     </ul>
                          </div>
                          <div className="topbar-column">
                                     <div className="column-box">
                                                 <span><PiMapPinLine /></span>
                                                 <p>25 Carbine Loop, Banksia Grove WA</p>
                                     </div>
                                     <span className="line"></span>
                                     <div className="column-box">
                                                 <span><BsEnvelopeAt /></span>
                                                 <p>info@odyrasafaris.com.au</p>
                                     </div>
                          </div>
                  </div>
            </div>
     </div>
  )
}

export default Topbar