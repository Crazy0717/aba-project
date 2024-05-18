import "./Moduls_slider.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper/modules"
import gsap from "gsap"
import { useLayoutEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Moduls_slider = ({ elRef }) => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.fromTo(
      "#head",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: "#head",
        },
      }
    )
    gsap.fromTo(
      ".swiper_slider",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".swiper_slider",
          start: "start 90%",
        },
      }
    )
    gsap.fromTo(
      ".boxes",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".boxes",
          start: "start 50%",
        },
      }
    )
  }, [])

  return (
    <div ref={elRef} id="moduls-slider" className="moduls-slider">
      <div className="top" id="head">
        <h1>Kurs dasturidagi modullar qanday?</h1>
        <div className="buttons">
          <button className="left_btn">
            <FaArrowRightLong />
          </button>
          <button className="right_btn">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="content">
        <Swiper
          className="swiper_slider"
          modules={[Navigation]}
          navigation={{ prevEl: ".left_btn", nextEl: ".right_btn" }}
          spaceBetween={20}
          slidesPerView={4.6}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3.5,
            },
            1400: {
              slidesPerView: 4.6,
            },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector 5.svg" alt="" />
                </div>
                <h2>Mutaxassislar uchun kurslar</h2>
              </div>
              <p>
                Ava mutaxassislarini tayyorlash dasturi xalqaro standartlar
                asosida qurilgan va 5 moduldan iborat bo'lib, MBP, CBA-S,IBA
                sertifikatlaridan.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector 4.svg" alt="" />
                </div>
                <h2>Ota-onalar uchun kurslar</h2>
              </div>
              <p>
                Ota-onalarga ABA terapiyasi bo'yicha treninglar,ota-onalarni
                o'qitish, maxsus bolani tarbiyalash uchun oddiy va amaliy
                vositalar.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector 2.svg" alt="" />
                </div>
                <h2>Malaka oshirish uchun kurslar</h2>
              </div>
              <p>
                Malaka oshirish va kasbiy qayta tayyorlash dasturlari.
                Tinglovchilarga MBP,CBA-S, BCBA,IBA sertifikatlarini va CEU
                bolalarini olish imkonini beradi.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector 3.svg" alt="" />
                </div>
                <h2>Amaliy mashg’ulotlar uchun kurslar</h2>
              </div>
              <p>
                Amaliy mashg'ulotlardan o'tish kurslarda o'rganilgan usullarni
                amalda sinab ko'rish.IBP, IBT (RBT), MBP, CBA-s va IBA
                sertifikatlarini olish shartlari.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector 1.svg" alt="" />
                </div>
                <h2>Nazorat uchun kurslar</h2>
              </div>
              <p>
                Nazorat ostida amaliyot o'tkazish amaliy xulq-atvorni tahlil
                qilish sohasidagi vakolatlarga ega bo'lish jarayonining ajralmas
                qismidir.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="boxes" id="ada">
          <div className="box">
            <div className="head">
              <div className="square">
                <img src="./images/Vector 5.svg" alt="" />
              </div>
              <h2>Mutaxassislar uchun kurslar</h2>
            </div>
            <p>
              Ava mutaxassislarini tayyorlash dasturi xalqaro standartlar
              asosida qurilgan va 5 moduldan iborat bo'lib, MBP, CBA-S,IBA
              sertifikatlaridan.
            </p>
          </div>
          <div className="box">
            <div className="head">
              <div className="square">
                <img src="./images/Vector 4.svg" alt="" />
              </div>
              <h2>Ota-onalar uchun kurslar</h2>
            </div>
            <p>
              Ota-onalarga ABA terapiyasi bo'yicha treninglar,ota-onalarni
              o'qitish, maxsus bolani tarbiyalash uchun oddiy va amaliy
              vositalar.
            </p>
          </div>
          <div className="box">
            <div className="head">
              <div className="square">
                <img src="./images/Vector 2.svg" alt="" />
              </div>
              <h2>Malaka oshirish uchun kurslar</h2>
            </div>
            <p>
              Malaka oshirish va kasbiy qayta tayyorlash dasturlari.
              Tinglovchilarga MBP,CBA-S, BCBA,IBA sertifikatlarini va CEU
              bolalarini olish imkonini beradi.
            </p>
          </div>
          <div className="box">
            <div className="head">
              <div className="square">
                <img src="./images/Vector 3.svg" alt="" />
              </div>
              <h2>Amaliy mashg’ulotlar uchun kurslar</h2>
            </div>
            <p>
              Amaliy mashg'ulotlardan o'tish kurslarda o'rganilgan usullarni
              amalda sinab ko'rish.IBP, IBT (RBT), MBP, CBA-s va IBA
              sertifikatlarini olish shartlari.
            </p>
          </div>
          <div className="box">
            <div className="head">
              <div className="square">
                <img src="./images/Vector 1.svg" alt="" />
              </div>
              <h2>Nazorat uchun kurslar</h2>
            </div>
            <p>
              Nazorat ostida amaliyot o'tkazish amaliy xulq-atvorni tahlil
              qilish sohasidagi vakolatlarga ega bo'lish jarayonining ajralmas
              qismidir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moduls_slider
