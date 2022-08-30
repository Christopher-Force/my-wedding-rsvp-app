import { Link } from "react-router-dom"
import '../Button.css';

export default function DetailsButton () {
  return (
    <div>
      <Link to='/details'><button className="btn gap-2 salmon text-black">
      <span className="material-symbols-outlined">
history_edu
</span>
        <span>Important<br/>Details</span></button></Link>
    </div>
  )
}