import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle subHeading={'what our client say'}
                heading={'testimonials'}
            ></SectionTitle>
            <div>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center px-20 py-8">
                                    <div className="flex flex-col items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="text-5xl py-6"><FaQuoteLeft /></p>
                                    </div>
                                    <p>{review.details}</p>
                                    <h3 className="text-2xl text-orange-500">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;