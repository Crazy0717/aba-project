import "./Home.scss"
import { useDispatch } from "react-redux"
import { FaArrowRightLong } from "react-icons/fa6"
import { enableSomeThing } from "../../slices/states"
import {
  CertificateStages,
  Footer,
  Moduls_slider,
  Navbar,
  Partners,
} from "../../components"
import { useRef } from "react"

const Home = () => {
  const dispatch = useDispatch()
  const modulsRef = useRef()
  const certificateRef = useRef()
  const experienceRef = useRef()

  const handleRegister = () => {
    dispatch(enableSomeThing("registerState"))
    dispatch(enableSomeThing("backgroundState"))
  }

  return (
    <div className="home">
      <Navbar mdRef={modulsRef} crRef={certificateRef} exRef={experienceRef} />
      <header>
        <div className="left">
          <span>Yuliya Erz kurslari</span>
          <h1>
            Amaliy xulq-atvor tahlili <span>ABA</span> asoslari kursi
          </h1>
          <p>
            Kurs Autistik Spektr Buzilishi bo'lgan bolalar bilan ishlashga
            ixtisoslashgan xulq-atvor va kurs ABA-terapiyasi uslublarini
            qo‘llashni o‘rganmoqchi bo‘lgan Autistik Spektr Buzilishi bo‘lgan
            bolalarning ota-onalari va mutaxassislar uchun ham.
          </p>
          <button onClick={handleRegister}>
            Ro’yxatdan o’tish <FaArrowRightLong />
          </button>
        </div>
        <div className="right">
          <img src="./images/Remove-bg 1.png" alt="" />
        </div>
      </header>
      <main>
        <Moduls_slider elRef={modulsRef} />
        <div ref={experienceRef} className="experience">
          <div className="left">
            <h2>13 Yillik ish tajribasi</h2>
            <span>
              Xalqaro darajadagi xulq-atvor mutaxassislarini kasbiy tayyorlash
            </span>
            <p>
              Bizning loyihamiz Rossiya va uning atrofidagi mamlakatlarda
              bitiruvchilari xalqaro miqyosda o'z vakolatlarini tasdiqlovchi
              sertifikatlarga ega bo'lgan kam sonli kishilardan biridir. <br />{" "}
              <br />
              Autizm loyihasi: xulq-atvorni tahlil qilish asosida tuzatish
              ishlari s(ava). Nazariya va amaliyot " 2011 yilda "bizning
              quyoshli dunyomiz "bolalik nogironlarini reabilitatsiya qilish
              markazi (Moskva) asosida yaratilgan.
            </p>
            <button onClick={handleRegister}>
              Ro’yxatdan o’tish <FaArrowRightLong />
            </button>
          </div>
          <div className="right">
            <img src="./images/Rectangle 49.png" alt="" />
          </div>
        </div>
        <div className="whyUs">
          <div className="top">
            <h2>Nega biz?</h2>
            <button onClick={handleRegister}>
              Ro’yxatdan o’tish <FaArrowRightLong />
            </button>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector.png" alt="" />
                </div>
                <h2>Amalda qo’llanilishi mumkin bo’lgan bilimlarr</h2>
              </div>
              <p>
                Xulq-atvor funktsiyasini aniqlash va maqsadli aralashuv rejasini
                ishlab chiqish uchun funktsional xatti-harakatlarni baholash
                bo'yicha bosqichma-bosqich ko'rsatma.
              </p>
            </div>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector (2).png" alt="" />
                </div>
                <h2>Turli darajalarda o’rganish va rivojlanish bosqichlari</h2>
              </div>
              <p>
                Rivojlanish bosqichlari: rivojlanishning asosiy bosqichlari va
                ularning hayotning turli bosqichlarida o'rganish va xulq-atvorga
                qanday ta'sir qilishi haqida umumiy ma'lumot..
              </p>
            </div>
            <div className="box">
              <div className="head">
                <div className="square">
                  <img src="./images/Vector (3).png" alt="" />
                </div>
                <h2>Tajribali va sertifikatlangan o’qituvchilar jamoasi</h2>
              </div>
              <p>
                Uzluksiz ta'lim va sertifikatlash: kasbiy ma'lumot va tajribani
                yanada oshirish uchun ilg'or sertifikatlar, tasdiqlashlar yoki
                maxsus treninglarni o'tkazish bo'yicha ko'rsatmalar.
              </p>
            </div>
          </div>
        </div>
        <div className="videos">
          <div className="top">
            <h1>Taqdimot videosi</h1>
          </div>
          <div className="content">
            <div className="left">
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>Masofaviy kursda o’qitish qanday amalga oshiriladi</p>
              </div>
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>Ava mutaxassisining ixtisoslashtirilgan ta'limi-kerakmi?</p>
              </div>
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>"Xulq-atvor tahlilchilarini sertifikatlash" nima?</p>
              </div>
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>"Xulq-atvor tahlilchisi" kasbi</p>
              </div>
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>Kasb "xulq-atvor dasturlari kuratori"</p>
              </div>
              <div className="box">
                <img src="./images/Union.svg" alt="" />
                <p>Ava o'qituvchisi kasbi</p>
              </div>
            </div>
            <div className="right">
              <img src="./images/Group 22.png" alt="" />
              <button onClick={handleRegister}>
                Ro’yxatdan o’tish <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <CertificateStages elRef={certificateRef} />
        <Partners />
        <Footer />
      </main>
    </div>
  )
}

export default Home
