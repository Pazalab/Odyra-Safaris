//import { Link } from "react-router-dom"
import { experiences } from "../../data/experiences";
import { HiArrowLongRight } from "react-icons/hi2";

const ItineraryHero = () => {
  return (
    <div className="itinerary-hero">
              <div className="inner-row">
                        <div className="itinerary-hero-content">
                                    <h1>Epic Safari Experiences</h1>
                                    <p className="intro">At Odyra Safaris, it&apos;s not just about where you go - it&apos;s about what you experience along the way. From thrilling game drives and up-close wildlife encounters to cultural immersions and breathtaking landscapes, every moment is designed to leave you in awe.</p>


                                    <div className="experiences-row">
                                            { experiences.map(item => 
                                                  <div className="experience-moja" key={item.id}>
                                                              <img src={item.image} alt="" />
                                    
                                                              <div className="experience-text">
                                                              <div className="experience-text-item">
                                                                        <h4>{item.title}</h4>
                                                                        <p>{item.description}</p>
                                                              </div>
                                                              <span><HiArrowLongRight /></span>
                                                   </div>
                                           </div>
                                      )}
                             </div>
                        </div>
              </div>
    </div>
  )
}

export default ItineraryHero