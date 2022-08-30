import { Link } from "react-router-dom"
import '../Button.css';

export default function RSVPButton () {
  return (
    <div>
      <Link to="/rsvp">
        <button className="btn gap-2 salmon text-black">
        <span className="material-symbols-outlined">
            dynamic_form
          </span>
          <span>RSVP Here</span>
          
        </button>
      </Link>
    </div>
  )
}