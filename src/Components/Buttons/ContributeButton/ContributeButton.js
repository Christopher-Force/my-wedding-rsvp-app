import { Link } from "react-router-dom"
import '../Button.css';

export default function ContributeButton () {
  return (
    <div>
      <Link to='/contribute'>
        <button className="main-buttons btn gap-2 text-black w-full">
          <span className="material-symbols-outlined">
            redeem
          </span>
          <span>Contribute</span>
        </button>
      </Link>
    </div>
  )
}