import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function MapPage () {
  return (
    <div>
      <div>
          <div>
            <h3 className="headline u-line text-2xl"><strong>Both Addresses</strong></h3>
          </div>
          <br />
        </div>
      <strong>
        <h1 className="mb-1">Map Information</h1>
      </strong>
      <p>
        Ceremony @ 1:00PM
        <br />
        PAWLEY'S ISLAND BEACH
        <br />
        1st Street Public Beach Access
        <br />
        County Rd S-22-10
        <br />
        Pawleys Island, SC 29585
      </p>
      <br />
      <div>
        <strong><h1 className="mb-1">Reception To Follow</h1> </strong>
        Starting @ 2:00-2:30PM Until 6:00-6:30PM
        <br />
        Family-Owned Rental Home - Backyard
        <br />
        43 Windy Lane
        <br />
        Pawleys Island, SC 29585
      </div>


      <br />

      <div className="flex gap-2">
          <RSVPButton />
          <HomeButton />
        </div>
        <br />
        <div className='flex gap-2'>
        
          <ContributeButton />
          <DetailsButton />
        </div>

    </div>
  )
}