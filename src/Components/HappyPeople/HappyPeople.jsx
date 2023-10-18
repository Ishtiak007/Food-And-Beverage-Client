import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './HappyPeople.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const HappyPeople = () => {
    return (
        <div>
            <div className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/Wpnq720/ivan-torres-MQUqbmsz-GGM-unsplash.jpg')] h-[450px] lg:h-[500px] bg-cover">
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">

                    <h1 className='text-white text-3xl font-semibold'>Happy People about us</h1>

                    <h1 className='dancing text-green-300 text-2xl'>Happy Them</h1>
                    <div className="h-full flex justify-center items-center">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/nnhrQSb/istockphoto-1194667029-612x612.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Monalisha Khanom
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Fantastic service! Always fresh, on-time, and friendly.❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/hVxXgTT/istockphoto-1319763895-612x612.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Apon Hawladar
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Delicious food, prompt delivery. A reliable choice!❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/LhWzc5b/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Solaiman Ali
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Top-notch! Our favorite place for culinary joy.❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/M1FkN99/istockphoto-1364917563-612x612.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Ali Al Zafor
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Consistent quality, outstanding taste. Highly recommended!❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/Bt1mLGd/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Ali Baba
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Reliable and tasty. Our go-to for great dining.❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <div className="p-6">
                                            <div className="w-[70px] mx-auto">
                                                <img className="w-full rounded-full" src="https://i.ibb.co/fptVhbK/istockphoto-1147066751-612x612.jpg" alt="" />
                                            </div>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                Yumna Zaidi
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                ❝Exceptional service, diverse menu. They never disappoint!❞
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyPeople;