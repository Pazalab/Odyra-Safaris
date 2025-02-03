import { Link } from "react-router-dom"
import { destinations } from "../../data/destinations"
import { HiArrowLongRight } from "react-icons/hi2"

const DestinationBody = () => {
  return (
    <div className="destination-body">
              <div className="inner-row">
                         <div className="destination-body-content">
                                     <h2>All Destinations</h2>

                                     <div className="destinations-row">
                                                 { destinations.map(item => 
                                                        <div className="destination-moja" key={item.id}>
                                                                    <img src={item.image} alt="" />

                                                                    <div className="destination-texts">
                                                                               <h3>{item.place}</h3>
                                                                               <Link to={"/"}>Explore <span><HiArrowLongRight /></span></Link>
                                                                    </div>
                                                        </div>
                                                 )}
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default DestinationBody