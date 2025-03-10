import { Link, useNavigate } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
//import { experiences } from "../../data/experiences";
import { HiArrowLongRight } from "react-icons/hi2";
import { itineraries } from "../../data/itineraries";

const ExperiencesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="experiences-section">
              <div className="inner-row">
                      <div className="experiences-section-content">
                                  <div className="experiences-intro">
                                            <h2>Epic Safari Experiences</h2>
                                            <div className="experiences-column">
                                                        <p>At Odyra Safaris, it’s not just about where you go—it’s about what you experience along the way. From thrilling game drives and up-close wildlife encounters to cultural immersions and breathtaking landscapes, every moment is designed to leave you in awe.</p>
                                                        <Link to={"/itineraries"}>All Experiences <span><GoArrowUpRight /></span></Link>
                                            </div>
                                  </div>

                                  <div className="experiences-row">
                                              { itineraries.map(item => 
                                                       <div className="experience-moja" key={item.id} onClick={() => navigate(item.link)}>
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

export default ExperiencesSection