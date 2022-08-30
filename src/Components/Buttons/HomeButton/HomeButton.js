import { Link } from "react-router-dom"
import '../Button.css';

export default function HomeButton () {
  return (
    <div>
      <Link to='/'>
      <button className="main-buttons btn btn-md gap-2 text-black w-full">

      <span className="material-symbols-outlined">
home_app_logo

</span>
        <span>Go Home</span></button></Link>
    </div>
  )
}