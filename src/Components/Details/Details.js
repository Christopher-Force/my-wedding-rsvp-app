// import BackButton from "../Buttons/BackButton/BackButton";
import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import MapButton from "../Buttons/MapButton/MapButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function Details () {
  return (
    <div>
      <div className="flex gap-2">
          <RSVPButton />
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