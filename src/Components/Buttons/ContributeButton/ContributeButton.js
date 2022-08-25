import { Link } from "react-router-dom"

export default function ContributeButton () {
  return (
    <div>
      <Link to='/contribute'><button className="btn">Contribute</button></Link>
    </div>
  )
}