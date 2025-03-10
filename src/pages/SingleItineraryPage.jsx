import { Link, useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { itineraries } from "../data/itineraries";
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/common/Footer";
import { LuCalendarCheck2 } from "react-icons/lu";
const SingleItineraryPage = () => {
    const { name } = useParams();
    const data = itineraries.find(item => item.url_param == name);
  return (
    <>
             <Navbar />
             <div className="itinerary-wrapper">
                        <div className="inner-row">
                                   <div className="itinerary-content">
                                               <h1>{data.title}</h1>

                                               <img src={data.image} alt="" />

                                                <p className="intro">{data.intro}</p>

                                                { data.specifics.map(item =>
                                                         <div className="journey-box" key={item.id}>
                                                                   <h3>{item.title}</h3>
                                                                   <p>{item.description}</p>
                                                         </div>
                                                )}

                                                <div className="itinerary-book">
                                                           <Link to={"/"}>Book Now <span><LuCalendarCheck2 /></span></Link>
                                                </div>
                                   </div>
                        </div>
             </div>
             <CallToAction />
             <Footer />
    </>
  )
}

export default SingleItineraryPage