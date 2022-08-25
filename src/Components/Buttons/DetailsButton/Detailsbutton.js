import { Link } from "react-router-dom"

export default function DetailsButton () {
  return (
    <div>
      <Link to='/details'><button className="btn">Important<br/>Details</button></Link>
    </div>
  )
}