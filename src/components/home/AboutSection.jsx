import { Link } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2";
import image1 from "../../assets/about1.jpg"
import image2 from "../../assets/about2.jpg"

const AboutSection = () => {
  return (
    <div className="about-section">
              <div className="inner-row">
                        <div className="about-section-content">
                                  <div className="about-section-column">
                                             <div className="inner-section">
                                                       <h3>About Odyra Safaris</h3>
                                                       <h2>Your Gateway to an Unmatched Safari Experience in the Heart of Africa.</h2>
                                             </div>
                                             <div className="inner-section">
                                                      <p>We craft unforgettable journeys that immerse you in the heart of Africa, where the wild meets the extraordinary. From thrilling wildlife encounters that get your pulse racing to awe-inspiring landscapes that take your breath away, every experience is designed to leave you with memories that last a lifetime. Whether you&apos;re capturing the perfect sunset or witnessing the majesty of Africa&apos;s creatures in their natural habitat, every moment is made to amaze.</p>
                                                      <Link to={"/about-us"}>Read More <span><HiArrowLongRight /></span></Link>
                                             </div>
                                  </div>
                                  <div className="about-section-wrap">
                                           <p>With expert guides who know the land like no one else, and a deep commitment to responsible travel, you’ll explore Africa in the most authentic way possible. This isn’t just a trip; it’s a connection to the soul of the continent—one that stays with you long after the adventure ends, leaving you yearning for more.</p>
                                           <div className="about-section-images">
                                                      <img src={image1} alt="" />
                                                      <img src={image2} alt="" />
                                           </div>
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutSection