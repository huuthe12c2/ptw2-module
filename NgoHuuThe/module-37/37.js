import React from 'react';
import './37.scss';
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
            <Swiper
                spaceBetween={50}
                slidesPerView={3.5}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src={require('./images/listing-7.jpg')} className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-7.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-9.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-7.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-9.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-7.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-9.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-7.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-9.jpg')} className="img-fluid" /></SwiperSlide>
                <SwiperSlide><img src={require('./images/listing-7.jpg')} className="img-fluid" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

export default App;
