import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="./images/logo 1.svg" alt="" />
      </div>
      <div className="content">
        <h2>5 ta o’quv dasturi</h2>
        <div className="lists">
          <ul>
            <li>1.Mutaxassislar uchun kurslar</li>
            <li>2.Ota-onalar uchun kurslar</li>
            <li>3.Malaka oshirish</li>
            <li>4.Amaliy mashg’ulotlar</li>
            <li>5.Nazorat</li>
          </ul>
          <ul>
            <li>Sertikifatlash</li>
            <li>Mutaxassislar reestri</li>
            <li>Kurs xaqida </li>
            <li>Kurs dasturi</li>
            <li>Resurslar</li>
          </ul>
          <ul id="contacts">
            <li>Ish vaqti: 10: 00 dan 17:00 gacha</li>
            <li>Info@Aba-kurs.com</li>
            <li className="social-links">
              <img src="/images/VK.svg" alt="" />
              <img src="/images/Behance.svg" alt="" />
              <img src="/images/Instagram.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="privacy">© 2024 barcha huquqlar himoyalangan.</div>
    </footer>
  )
}

export default Footer
