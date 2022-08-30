import { Link } from "react-router-dom"
import '../Button.css';

export default function DetailsButton () {
  return (
    <div>
      <Link to='/details'>
        <button className="main-buttons btn gap-2 text-black w-full">

      <span className="material-symbols-outlined">
history_edu
</span>
        <span>Important<br/>Details</span></button></Link>
    </div>
  )
}

