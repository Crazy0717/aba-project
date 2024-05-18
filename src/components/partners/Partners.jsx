import "./Partners.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { IoIosArrowBack } from "react-icons/io"

const Partners = () => {
  return (
    <div className="partners">
      <div className="head">
        <h2>Bizning hamkorlar</h2>
      </div>
      <div className="content">
        <div className="buttons">
          <button>
            <IoIosArrowBack className="prev" />
          </button>
          <button>
            <IoIosArrowBack className="next" />
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          slidesPerView={6}
          className="slider"
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            448: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            900: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <img src="/images/Frame 43.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/водный знак.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/водный знак (1).png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 15.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 16.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 21.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/водный знак (1).png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Frame 43.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/image 15.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Partners
