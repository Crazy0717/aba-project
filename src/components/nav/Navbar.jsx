import "./Navbar.scss"
import { NavLink } from "react-router-dom"
import { HiBars3 } from "react-icons/hi2"
import { IoClose } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import {
  disableBackground,
  disableSomeThing,
  enableBackground,
  enableSomeThing,
} from "../../slices/states"

const Navbar = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  const openBars = () => {
    dispatch(enableSomeThing("barsState"))
    dispatch(enableBackground())
  }
  const closeBars = () => {
    dispatch(disableSomeThing("barsState"))
    dispatch(disableBackground())
  }

  return (
    <nav>
      <div className="logo">
        <img src="./images/logo 1.svg" alt="" />
      </div>
      <ul>
        <NavLink to={"/"}>Kurs xaqida</NavLink>
        <NavLink to={"/course-plan"}>Kurs dasturi</NavLink>
        <NavLink to={"/certificate"}>Sertifikatlash</NavLink>
        <NavLink to={"/page"}>Mutaxassislar reestri</NavLink>
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
          <NavLink to={"/"}>Kurs xaqida</NavLink>
          <NavLink to={"/course-plan"}>Kurs dasturi</NavLink>
          <NavLink to={"/certificate"}>Sertifikatlash</NavLink>
          <NavLink to={"/page"}>Mutaxassislar reestri</NavLink>
        </ul>
        <button>
          Ro’yxatdan o’tish <FaArrowRightLong />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
