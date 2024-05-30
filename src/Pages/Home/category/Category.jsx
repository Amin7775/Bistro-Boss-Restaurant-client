import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// images
import slide1 from './../../../assets/home/slide1.jpg'
import slide2 from './../../../assets/home/slide2.jpg'
import slide3 from './../../../assets/home/slide3.jpg'
import slide4 from './../../../assets/home/slide4.jpg'
import slide5 from './../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-white text-2xl text-center -mt-16 drop-shadow-lg font-light uppercase'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-white text-2xl text-center -mt-16 drop-shadow-lg font-light uppercase'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-white text-2xl text-center -mt-16 drop-shadow-lg font-light uppercase'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-white text-2xl text-center -mt-16 drop-shadow-lg font-light uppercase'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-white text-2xl text-center -mt-16 drop-shadow-lg font-light uppercase'>Special</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;