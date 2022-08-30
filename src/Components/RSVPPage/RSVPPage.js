// import BackButton from "../Buttons/BackButton/BackButton";
import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import MapButton from "../Buttons/MapButton/MapButton";


export default function RSVPPage () {
  return (
    <div>
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