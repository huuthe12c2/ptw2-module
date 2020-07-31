import React from 'react';
import './11.scss';
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
        
        <div className="expert">
            <div className="text-benner">
                <h2>Expert Tips & News</h2>
                <div className="title-desc">Checkout latest news and articles from our blog</div>
            </div>
            <div className="container">
                <div className="mg-bg">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img src={require('./images/post-11.jpg')} className="img-fluid img-slide " />
                        </SwiperSlide>
                        <SwiperSlide><img src={require('./images/post-10.jpg')} className="img-fluid img-slide" /></SwiperSlide>
                        <SwiperSlide><img src={require('./images/post-11.jpg')} className="img-fluid img-slide"/></SwiperSlide>
                        <SwiperSlide><img src={require('./images/post-10.jpg')} className="img-fluid img-slide" /></SwiperSlide>
                        <SwiperSlide><img src={require('./images/post-11.jpg')} className="img-fluid img-slide" /></SwiperSlide>
                        <SwiperSlide><img src={require('./images/post-10.jpg')} className="img-fluid img-slide" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        
    );
}

export default App;
