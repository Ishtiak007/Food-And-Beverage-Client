import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div>

            <Swiper
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/FKRpfYR/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/V21kt0Z/brett-jordan-zee1ge-Zy6-H0-unsplash.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/YhR8GcF/engin-akyurt-Nl-Gjqc-PACUw-unsplash.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/sQqh6nV/nikhil-e-Eumk-Kjg7-Jo-unsplash-1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/1GvdNCQ/denny-muller-m-GP8gy-Gb8z-Y-unsplash.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://i.ibb.co/W3LW5bR/vachos-xantinidis-UEPDUzcm-WLE-unsplash.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <Marquee>
                    <h1 className='text-green-500 font-semibold text-lg my-3'>Discover a variety of top-quality food and beverages for your convenience. Elevate your dining and refreshment experiences with our offerings.</h1>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/FKRpfYR/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/V21kt0Z/brett-jordan-zee1ge-Zy6-H0-unsplash.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/YhR8GcF/engin-akyurt-Nl-Gjqc-PACUw-unsplash.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/sQqh6nV/nikhil-e-Eumk-Kjg7-Jo-unsplash-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/1GvdNCQ/denny-muller-m-GP8gy-Gb8z-Y-unsplash.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src="https://i.ibb.co/W3LW5bR/vachos-xantinidis-UEPDUzcm-WLE-unsplash.jpg" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Slider;