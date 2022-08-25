import ContributeButton from "../../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../../Buttons/DetailsButton/Detailsbutton";
import MapButton from "../../Buttons/MapButton/MapButton";
import RSVPButton from "../../Buttons/RSVPButton/RSVPButton";

export default function HeroText() {
  return (
    <div className="inner-header flex">
      <div>
        <div>
          <div>
            11.12.22
          </div>
          <div>
            Christopher and Precious
          </div>
          <div>
            Celebrate Our Special Day With Us!
          </div>
        </div>
        <br />

        <RSVPButton />
        <br />
        <div className='flex'>
          <MapButton />
          <ContributeButton />
          <DetailsButton />
        </div>
      </div>
    </div>
  )
}

