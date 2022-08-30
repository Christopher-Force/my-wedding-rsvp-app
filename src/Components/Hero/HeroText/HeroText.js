import ContributeButton from "../../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../../Buttons/DetailsButton/Detailsbutton";
import MapButton from "../../Buttons/MapButton/MapButton";
import RSVPButton from "../../Buttons/RSVPButton/RSVPButton";
import "./HeroText.css";

export default function HeroText() {
  return (
    <div className="inner-header flex items-start">
      <div>
        <div>
          <div>
            <h1 className="date">
              11.12.22
            </h1>
          </div>
          <br/>
          <div>
            <h2 className="names text-5xl">Christopher and Precious</h2>
          </div>
          <br/>
          <div>
            <strong>
              <h3 className="headline text-xl">Celebrate Our Special Day With Us!</h3>
            </strong>
          </div>
          <br />
          <div>
            <h3 className="headline u-line text-2xl"><strong>Please RSVP by 09.15.22</strong></h3>
          </div>
        </div>
        <br />
        <br />
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
    </div>
  )
}

