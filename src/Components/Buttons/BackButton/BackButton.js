import { useNavigate } from "react-router-dom"

export default function BackButton () {
  let history = useNavigate();
  return (
    <div>
        <button onClick={() => history(-1)} className="btn">Go Back</button>
    </div>
  )
}