import ContributeButton from "../../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../../Buttons/DetailsButton/Detailsbutton";
import MapButton from "../../Buttons/MapButton/MapButton";
import RSVPButton from "../../Buttons/RSVPButton/RSVPButton";
import "./HeroText.css";

export default function HeroText() {
  return (
    <div className="inner-header flex">
      <div>
        <div>
          <div>
            <h1 className="date">
              11.12.22
            </h1>
          </div>
          <div>
            <h2 className="names">Christopher and Precious</h2>
          </div>
          <div>
            <strong>
              <h3 className="headline">Celebrate Our Special Day With Us!</h3>
            </strong>
          </div>
          <br />
          <div>
            <h3 className="headline u-line ">Please RSVP by 09.15.22</h3>
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

