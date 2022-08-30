import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import MapButton from "../Buttons/MapButton/MapButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function Contribute () {
  return (
    <div>
      <div className="flex gap-2">
          <RSVPButton />
          <MapButton />
        </div>
        <br />
        <div className='flex gap-2'>
        
          <HomeButton />
          <DetailsButton />
        </div>
    </div>
  )
}