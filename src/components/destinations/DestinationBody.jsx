import { Link } from "react-router-dom"
import { destinations } from "../../data/destinations"
import { HiArrowLongRight } from "react-icons/hi2"
import { useState } from "react"

const DestinationBody = () => {
  const [ active, setActive ] = useState("Kenya")
  return (
    <div className="destination-body">
              <div className="inner-row">
                         <div className="destination-body-content">
                                     <h2>All Destinations</h2>

                                     <div className="destination-shifts">
                                                { destinations.map(item => item.country).map(kitu => 
                                                       <span onClick={() => setActive(kitu)} className={active === kitu ? "active" : ""} key={kitu}>{kitu}</span>
                                                )}
                                     </div>
                                     <div className="destinations-row">
                                                 { destinations.find(item => item.country === active).destinations.slice(0,6).map(item => 
                                                        <div className="destination-moja" key={item.id}>
                                                                    <img src={item.image} alt="" />

                                                                    <div className="destination-texts">
                                                                               <h3>{item.title}</h3>
                                                                               {/* <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link> */}
                                                                    </div>
                                                        </div>
                                                 )}
                                     </div>
                                     <div className="desti-link-wrap">
                                                  <Link className="desti-link" to={"/"}>All {active} Destinations <span><HiArrowLongRight /></span></Link>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default DestinationBody