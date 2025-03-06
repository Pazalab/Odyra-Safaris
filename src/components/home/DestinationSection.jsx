import { useState } from "react"
import destination1 from "../../assets/destination1.jpg"
import destination2 from "../../assets/destination2.jpg"
import destination3 from "../../assets/destination6.jpg"
import destination4 from "../../assets/destination7.jpg"
import { Link } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";

const DestinationSection = () => {
    const [active, setActive] = useState(3)
  return (
    <div className="destination-section">
               <div className="inner-row">
                         <div className="destination-section-content">
                                      <div className="destination-intro">
                                                  <h3>Featured Destinations</h3>
                                                  <h2>Best Places to Explore</h2>
                                      </div>
                                      <div className="destination-row">
                                                 <div onClick={() => setActive(0)} className={active === 0 ? "destination-column active" : "destination-column"}>
                                                            <img src={destination1} alt="" />
                                                            <div className="overlay"></div>
                                                            <h3><span></span>Kenya</h3>

                                                            <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link>
                                                 </div>
                                                 <div onClick={() => setActive(1)} className={ active === 1 ? "destination-column active" : "destination-column"}>
                                                           <img src={destination2} alt="" />
                                                           <div className="overlay"></div>
                                                           <h3><span></span>Tanzania</h3>
                                                           <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link>
                                                 </div>
                                                 <div onClick={() => setActive(2)} className={ active === 2 ? "destination-column active" : "destination-column"}>
                                                            <img src={destination3} alt="" />
                                                            <div className="overlay"></div>
                                                            <h3><span></span>Uganda</h3>
                                                            <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link>
                                                 </div>
                                                 <div onClick={() => setActive(3)} className={ active === 3 ? "destination-column active" : "destination-column"}>
                                                            <img src={destination4} alt="" />
                                                            <div className="overlay"></div>
                                                            <h3><span></span>Rwanda</h3>
                                                            <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link>
                                                 </div>
                                      </div>

                                      <div className="destination-extra">
                                                 <p>At Odyra Safaris, we know the best spots to make your adventure truly unforgettable! Whether it’s witnessing the Big Five in action, exploring breathtaking landscapes, or immersing yourself in rich local cultures, we take you to the heart of Africa’s most incredible destinations.</p>

                                                 <Link to={"/destinations"}>More Destinations <span><GoArrowUpRight /></span></Link>
                                      </div>
                         </div>
               </div>
    </div>
  )
}

export default DestinationSection