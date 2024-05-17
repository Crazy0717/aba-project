import "./BlackBackground.scss"
import { disablEveryThing } from "../../slices/states"
import { useDispatch, useSelector } from "react-redux"

const BlackBackground = () => {
  const states = useSelector((state) => state.states)
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(disablEveryThing())}
      className={
        states.backgroundState ? "blackBackground active" : "blackBackground"
      }
    ></div>
  )
}

export default BlackBackground
