import BackButton from "../Buttons/BackButton/BackButton";
import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function MapPage () {
  return (
    <div>
      Ceremony:
      <br />
      Time:
      <br />
      <br />
      Reception:
      <br />
      Time:
      <br />
      <br />
      <h2>Route from Ceremony to Reception</h2>
      <br/>

      <img alt='Ceremony to Reception Map'></img>
      <br />

      <div className="flex">
        <ContributeButton />
        <RSVPButton />
        <DetailsButton />
      </div>
      <div>
        <br />
        <BackButton />
      </div>

    </div>
  )
}