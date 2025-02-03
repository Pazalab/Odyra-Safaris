import { testimonials } from "../../data/testimonials"
import partner1 from "../../assets/rise.png"
import partner2 from "../../assets/sanfrancisco.png"
import partner3 from "../../assets/snowflake.png"
import partner4 from "../../assets/springfield.png"
import partner5 from "../../assets/vancouver.png"

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
               <div className="inner-row">
                           <div className="testimonials-section-content">
                                        <h3>Testimonials</h3>
                                        <h2>Don&apos;t take our word for it! <br></br> Hear it from our past clients</h2>

                                        <div className="testimonials-row">
                                                     { testimonials.map(item => 
                                                               <div className="testimonial-moja" key={item.id}>
                                                                            <img src={item.image} alt="" />

                                                                            <p>&quot; {item.saying} &quot;</p>
                                                                            <h4>{item.name} ~ <span>{item.position}</span></h4>
                                                               </div>
                                                     )}
                                        </div>

                                        <div className="partners-section">
                                                   <div className="partners-header">
                                                                 <h4>Our Partners</h4>
                                                                 <span></span>
                                                   </div>
                                                    
                                                      <div className="partners-logos">
                                                                   <img src={partner1} alt="" />
                                                                   <img src={partner2} alt="" />
                                                                   <img src={partner3} alt="" />
                                                                   <img src={partner4} alt="" />
                                                                   <img src={partner5} alt="" />
                                                      </div>
                                        </div>
                           </div>
               </div>
    </div>
  )
}

export default TestimonialsSection