import { safari_process } from "../../data/process"

const ProcessSection = () => {
  return (
    <div className="process-section">
              <div className="inner-row">
                        <div className="process-section-content">
                                     <div className="process-intro">
                                                <h2>Your Safari Journey: From Planning to Adventure</h2>
                                                <p>Our team works closely with you to craft a personalized itinerary tailored to your interests, budget, and travel style. We handle all the details - accommodation, transport, park permits, and expert guides - so you can focus on the adventure ahead.</p>
                                     </div>

                                     <div className="process-row">
                                             { safari_process.map(item => 
                                                     <div className="safari-process-moja" key={item.id}>
                                                                   <h3><span>{item.id}</span>. {item.title}</h3>
                                                                   <p>{item.description}</p>
                                                     </div>
                                             )}
                                     </div>
                        </div>
              </div>
    </div>
  )
}

export default ProcessSection