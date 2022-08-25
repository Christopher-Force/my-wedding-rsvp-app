import { Link } from "react-router-dom"

export default function RSVPButton () {
  return (
    <div>
      <Link to="/rsvp"><button className="btn">RSVP</button></Link>
    </div>
  )
}