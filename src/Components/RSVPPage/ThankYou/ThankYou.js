import ContributeButton from "../../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../../Buttons/HomeButton/HomeButton";
import MapButton from "../../Buttons/MapButton/MapButton";


export default function ThankYou () {
  return (
    <div className="max-w-[680px]">
      <h1 className="names">Thank You..</h1>
      <h1 className="date text-2xl"><strong>We're Extremely Excited To See ALL OF YOU!</strong></h1>
      <h2 className="text-2xl">In the meantime.. Please check the rest of the website for times, addresses, important details, and contribution options.</h2>
      <br />
      <div className="flex gap-2">
        <HomeButton />
        <MapButton />
          
        </div>
        <br />
        <div className='flex gap-2'>
        
          <ContributeButton />
          <DetailsButton />
        </div>
    </div>
  )
}