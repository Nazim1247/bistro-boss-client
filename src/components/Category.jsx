import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import SectionTitle from './SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={'from 11.00am to 10.00pm'}
            heading={'order online'}
            >
            </SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-center uppercase text-4xl -mt-16 text-white'>salad</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-center uppercase text-4xl -mt-16 text-white'>pizzas</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-center uppercase text-4xl -mt-16 text-white'>soups</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-center uppercase text-4xl -mt-16 text-white'>desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-center uppercase text-4xl -mt-16 text-white'>salad</h3>
            </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;