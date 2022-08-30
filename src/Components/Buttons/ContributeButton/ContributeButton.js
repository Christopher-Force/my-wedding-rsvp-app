import { Link } from "react-router-dom"
import '../Button.css';

export default function ContributeButton () {
  return (
    <div>
      <Link to='/contribute'>
        <button className="btn gap-2 salmon text-black">
          <span className="material-symbols-outlined">
            redeem
          </span>
          <span>Contribute</span>
        </button>
      </Link>
    </div>
  )
}