import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { Autoplay } from 'swiper/modules';
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import { HiArrowLongRight,  HiArrowLongLeft } from "react-icons/hi2";


const hero_data = [
     {
          id: 0,
          image: "one",
          title: "Explore Africa, One Breathtaking Moment at a Time."
     },
     {
         id: 1,
         image: "two",
         title: "Adventure Awaits - Let Odyra Safaris Take You There."
     },
     {
         id: 2,
         image: "three",
         title: "Where Every Journey is Wildly Unforgettable."
     }
]
const HeroSection = () => {
    const [swiperRef, setSwiperRef ] = useState()
  return (
    <div className="hero-section">
             <div className="hero-section-inner-wrap">
                        <div className="hero-slider">
                                    <Swiper 
                                              slidesPerView={1}
                                              loop={true}
                                              speed={1000}
                                              
                                              direction={'horizontal'}
                                              autoplay={{
                                                    delay: 8500,
                                                    disableOnInteraction: false
                                              }}
                                              modules={[Autoplay]}
                                              className="mySwiper"
                                              onSwiper={(swiper) => setSwiperRef(swiper)}
                                    >
                                                { hero_data.map(slide => 
                                                        <SwiperSlide key={slide.id}>
                                                                    { ({ isActive }) => (
                                                                            <div className={`hero-slide-moja ${slide.image}`}>
                                                                                        <div className="inner-row">
                                                                                                 <div className={ isActive ? "hero-texts active" : "hero-texts"}>
                                                                                                            <h1>{slide.title}</h1>

                                                                                                            <Link to={"/"}>Explore <span><LuMoveRight /></span></Link>
                                                                                                 </div>
                                                                                        </div>
                                                                            </div>
                                                                    )}
                                                        </SwiperSlide>
                                                )}

                                    </Swiper>

                                    <div className="hero-navigations">
                                                <div className="hero-arrow left" onClick={() => swiperRef.slidePrev()}>
                                                           <span><HiArrowLongLeft /></span>
                                                </div>
                                                <div className="hero-arrow right" onClick={() => swiperRef.slideNext()}>
                                                           <span><HiArrowLongRight /></span>
                                                </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default HeroSection