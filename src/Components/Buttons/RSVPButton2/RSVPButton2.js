import { Link } from "react-router-dom"

export default function RSVPButton2 () {
  return (
    <div>
      <Link to="/rsvp"><button className="btn">Additional RSVP</button></Link>
    </div>
  )
}