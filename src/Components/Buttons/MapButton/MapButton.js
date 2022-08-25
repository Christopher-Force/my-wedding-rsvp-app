import { Link } from "react-router-dom"

export default function MapButton () {
  return (
    <div>
      <Link to="/map"><button className="btn">Map</button></Link>
    </div>
  )
}