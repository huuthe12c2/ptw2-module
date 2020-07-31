import React from 'react';
import './25.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function App() {
    return (
        <div className="container">

            <div className="mg-bg">
                <div className="gsc-heading ">
                    <div className="sub-title"><span>Expert Tips &amp; News</span></div>
                    <h2 className="title"><span>Keep up to date with the latest news articles from Lozin.</span></h2>
                    <div className="title-desc"><p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt .</p>
                    </div>
                </div>
                <div className="hover-slide-next">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="slide-img">
                            <img src={require('./images/listing-7.jpg')} className="img-slide" />
                            <div className="name-slide">
                                <a href="#" className="new-post">Music</a>
                                <div className="desc-post">Coffeeshops continue to conquer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-img">
                            <img src={require('./images/listing-7.jpg')} className="img-slide" />
                            <div className="name-slide">
                                <a href="#" className="new-post">Music</a>
                                <div className="desc-post">Coffeeshops continue to conquer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-img">
                            <img src={require('./images/listing-7.jpg')} className="img-slide" />
                            <div className="name-slide">
                                <a href="#" className="new-post">Music</a>
                                <div className="desc-post">Coffeeshops continue to conquer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-img">
                            <img src={require('./images/listing-7.jpg')} className="img-slide" />
                            <div className="name-slide">
                                <a href="#" className="new-post">Shoping</a>
                                <div className="desc-post">Coffeeshops continue to conquer</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
                
            </div>
        </div>
    );
}

export default App;
