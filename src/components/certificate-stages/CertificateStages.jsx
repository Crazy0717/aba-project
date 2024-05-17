import "./CertificateStages.scss"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"

const CertificateStages = () => {
  return (
    <div className="certificateStages">
      <div className="top">
        <h2>Sertifikatlashning 5 darajasi</h2>
      </div>
      <div className="content">
        <ul className="left">
          <li>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<IoIosArrowDown className="arrow-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                01-IBP xulq-atvor dasturlarini amalga oshiruvchi
                (ABA-o’qituvchi)
              </AccordionSummary>
              <AccordionDetails>
                <h3>Malakani saqlash:</h3>
                <ul>
                  <li>Malakani muddati-12 oy</li>
                  <li>
                    Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                    zarur: <br /> Nazoratchi yoki kurator tomonidan imzolangan
                    amaliyot soatlarini hisobga olish shakllarini oxirgi 12 oy
                    ichida kamida 10 soat hajmda taqdim etish{" "}
                  </li>
                  <li>
                    "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoIosArrowDown className="arrow-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                02-IBP xulq-atvor dasturlarini amalga oshiruvchi (Katta
                ABA-o’qituvchisi)
              </AccordionSummary>
              <AccordionDetails>
                <h3>Malakani saqlash:</h3>
                <ul>
                  <li>Malakani muddati-12 oy</li>
                  <li>
                    Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                    zarur: <br /> Nazoratchi yoki kurator tomonidan imzolangan
                    amaliyot soatlarini hisobga olish shakllarini oxirgi 12 oy
                    ichida kamida 10 soat hajmda taqdim etish{" "}
                  </li>
                  <li>
                    "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoIosArrowDown className="arrow-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                03-IBP xulq-atvor dasturlarini amalga oshiruvchi
                (ABA-dasturlari)
              </AccordionSummary>
              <AccordionDetails>
                <h3>Malakani saqlash:</h3>
                <ul>
                  <li>Malakani muddati-12 oy</li>
                  <li>
                    Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                    zarur: <br /> Nazoratchi yoki kurator tomonidan imzolangan
                    amaliyot soatlarini hisobga olish shakllarini oxirgi 12 oy
                    ichida kamida 10 soat hajmda taqdim etish{" "}
                  </li>
                  <li>
                    "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoIosArrowDown className="arrow-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                04-MBP xulq-atvor dasturlarini amalga oshiruvchi (Xulq-atvor
                dasturlari kuratori)
              </AccordionSummary>
              <AccordionDetails>
                <h3>Malakani saqlash:</h3>
                <ul>
                  <li>Malakani muddati-12 oy</li>
                  <li>
                    Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                    zarur: <br /> Nazoratchi yoki kurator tomonidan imzolangan
                    amaliyot soatlarini hisobga olish shakllarini oxirgi 12 oy
                    ichida kamida 10 soat hajmda taqdim etish{" "}
                  </li>
                  <li>
                    "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <AccordionSummary
                expandIcon={<IoIosArrowDown className="arrow-icon" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                05-CBA-S Sertifikatlangan xulq-atvor tahlilchisi va
                maslahatchisi (S-x-a-t-v-n)
              </AccordionSummary>
              <AccordionDetails>
                <h3>Malakani saqlash:</h3>
                <ul>
                  <li>Malakani muddati-12 oy</li>
                  <li>
                    Bir yildan keyin malakani saqlab qolish uchun quyidagilar
                    zarur: <br /> Nazoratchi yoki kurator tomonidan imzolangan
                    amaliyot soatlarini hisobga olish shakllarini oxirgi 12 oy
                    ichida kamida 10 soat hajmda taqdim etish{" "}
                  </li>
                  <li>
                    "Yillik sertifikatlash" jarayonidan muvaffaqiyatli o'ting
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </li>
        </ul>
        <div className="right">
          <div className="block">
            <h3>Kurs o’quv dasturining PDF</h3>
            <p>
              1-modulni muvaffaqiyatli tugatish "Amaliy xulq-atvorni tahlil
              qilishning asosiy printsiplari va usullari (ava)" mutaxassislar
              uchun dasturlar
            </p>
            <p>
              2. 1-amaliy treningdan o'ting "Asd bilan kasallangan bolalar bilan
              ishlashda asosiy ava ta'lim strategiyalarini qo'llash"
            </p>
            <a href="/images/pdf cer.png" download>
              PDF-ni yuklab oling <FaArrowRightLong />
            </a>
          </div>
          <div className="block pdf-file">
            <h3>Malakani tasdiqlovchi hujjat</h3>
            <hr />
            <p>1-darajali sertifikat (Aba-o'qituvchi/terapevt)</p>
            <img src="/images/pdf cer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateStages
