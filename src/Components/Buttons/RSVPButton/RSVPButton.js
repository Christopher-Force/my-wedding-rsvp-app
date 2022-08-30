import { Link } from "react-router-dom"
import '../Button.css';

export default function RSVPButton () {
  return (
    <div>
      <Link to="/rsvp">
      <button className="main-buttons btn gap-2 text-black w-full">

        <span className="material-symbols-outlined">
            dynamic_form
          </span>
          <span>RSVP Here</span>
          
        </button>
      </Link>
    </div>
  )
}