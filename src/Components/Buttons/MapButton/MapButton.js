import { Link } from "react-router-dom"
import '../Button.css';

export default function MapButton() {
  return (
    <div>
      <Link to="/map">
      <button className="main-buttons btn gap-2 text-black w-full">

        <span className="material-symbols-outlined">
        travel_explore
      </span>
        <span>Addresses <br /> & Times </span>
      </button></Link>
    </div>
  )
}

// 