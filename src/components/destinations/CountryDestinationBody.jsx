import { useParams } from "react-router-dom"
import { destinations } from "../../data/destinations"
import { PiCheck } from "react-icons/pi";

const CountryDestinationBody = () => {
    const { name } = useParams();
    const content = destinations.find(item => item.country.toLowerCase() === name);
  return (
    <div className="country-wrapper">
               <div className="inner-row">
                         <div className="country-wrapper-content">
                                     <h1>All {content.country}n Destinations</h1>
                                     <div className="wrapper-texts">
                                               <p>{content.intro[0]}</p>
                                               <p>{content.intro[1]}</p>
                                     </div>

                                     <div className="country-destination-row">
                                               { content.destinations.map(item => 
                                                     <div className="destination-achiel" key={item.id}>
                                                              <div className="image-section">
                                                                         <img src={item.image} alt="" />
                                                              </div>
                                                              <div className="achiel-texts">
                                                                       <h3>{item.title}</h3>
                                                                       <ul>
                                                                                {item.description.map(item2 => 
                                                                                       <li key={item2}><span><PiCheck /></span>{item2}</li>
                                                                                )}
                                                                       </ul>
                                                              </div>
                                                    </div>
                                               )}
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default CountryDestinationBody