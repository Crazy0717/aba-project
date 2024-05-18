import "./Register.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Register = () => {
  const states = useSelector((state) => state.states)
  useEffect(() => {
    if (states.registerState) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [states.registerState])

  return (
    <div
      className={states.registerState ? "register active" : "register noactive"}
    >
      <div className="top">
        <img src="./images/logo 1.svg" alt="" />
        <h1>Ro’yxatdan o’tish</h1>
        <p>
          Xush kelibsiz! Iltimos, kelgusi tadbirimizga yozilish uchun quyidagi
          ro'yxatdan o'tish formasini to'ldiring.
        </p>
      </div>
      <form>
        <div className="input">
          <label htmlFor="">Ism Familiya</label>
          <input
            type="text"
            placeholder="Ism Familiyangizni kiriting"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="">Telefon raqami</label>
          <input type="text" placeholder="+998 90 123 45 67" required />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Emailingizni kiriting" required />
        </div>
        <button>
          Ro’yxatdan o’tish <FaArrowRightLong />
        </button>
      </form>
    </div>
  )
}

export default Register
