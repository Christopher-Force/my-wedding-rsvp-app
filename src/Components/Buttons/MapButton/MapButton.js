import { Link } from "react-router-dom"
import '../Button.css';

export default function MapButton() {
  return (
    <div>
      <Link to="/map"><button className="btn gap-2 salmon text-black"><span className="material-symbols-outlined">
        travel_explore
      </span>
        <span>Addresses</span>
      </button></Link>
    </div>
  )
}

// 