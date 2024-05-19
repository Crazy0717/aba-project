import "./Navbar.scss"
import { NavLink } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2"
import { IoClose } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { disableSomeThing, enableSomeThing } from "../../slices/states"

const Navbar = ({ mdRef, crRef, exRef }) => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  const openBars = () => {
    dispatch(enableSomeThing("barsState"))
    dispatch(enableSomeThing("backgroundState"))
  }
  const closeBars = () => {
    dispatch(disableSomeThing("barsState"))
    dispatch(disableSomeThing("backgroundState"))
  }

  const handleScroll = (ref, position = "start") => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: position })
  }
  return (
    <nav>
      <div className="logo">
        <img src="./images/logo 1.svg" alt="" />
      </div>
      <ul>
        <NavLink className="current" to={"/"}>
          Kurs xaqida
        </NavLink>
        <NavLink onClick={() => handleScroll(mdRef)}>Kurs dasturi</NavLink>
        <NavLink onClick={() => handleScroll(crRef, "center")}>
          Sertifikatlash
        </NavLink>
        <NavLink onClick={() => handleScroll(exRef, "center")}>
          Mutaxassislar reestri
        </NavLink>
      </ul>
      <div className="phoneNumber">
        <p>+998 94 622 39 99</p>
        <span>Kursga yozilish uchun</span>
      </div>
      <div onClick={openBars} className="bars">
        <HiBars3 />
      </div>
      <div className={states.barsState ? "bars_block active" : "bars_block"}>
        <div className="bars_top">
          <IoClose onClick={closeBars} />
        </div>
        <ul>
          <NavLink className="current" to={"/"}>
            Kurs xaqida
          </NavLink>
          <NavLink onClick={() => handleScroll(mdRef)}>Kurs dasturi</NavLink>
          <NavLink onClick={() => handleScroll(crRef, "center")}>
            Sertifikatlash
          </NavLink>
          <NavLink onClick={() => handleScroll(exRef, "center")}>
            Mutaxassislar reestri
          </NavLink>
        </ul>
        <button>
          Ro’yxatdan o’tish <FaArrowRightLong />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
