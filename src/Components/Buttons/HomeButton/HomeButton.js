import { Link } from "react-router-dom"
import '../Button.css';

export default function HomeButton () {
  return (
    <div>
      <Link to='/'><button className="btn btn-sm gap-2 salmon text-black">
      <span className="material-symbols-outlined">
home_app_logo

</span>
        <span>Go Home</span></button></Link>
    </div>
  )
}