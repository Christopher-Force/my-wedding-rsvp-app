import Logo from '../../Assets/f-logo.png'
import { Link } from "react-router-dom"
import HomeButton from '../Buttons/HomeButton/HomeButton'

export default function Banner () {
  return (
    <div>
      <div className='flex'>
        <div className="grid grid-cols-2 items-center max-w-2xl">
          <Link to="/"><span className='justify-self-start'><img alt="Logo" src={Logo} width="80" /></span></Link>
          
          <Link to="/"><HomeButton /></Link>
        </div>
      </div> 
      <hr className='mt-1 mb-1' />
    </div>
  )
}