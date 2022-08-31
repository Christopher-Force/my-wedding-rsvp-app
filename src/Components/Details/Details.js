// import BackButton from "../Buttons/BackButton/BackButton";
import ContributeButton from "../Buttons/ContributeButton/ContributeButton";
import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import MapButton from "../Buttons/MapButton/MapButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";

export default function Details () {
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-xl u-line mb-1">IMPORTANT DETAILS</h1>
        <h1 className="text-lg u-line mb-1"><strong>Dress Code:</strong> </h1> <h2 className="mb-1">Beach Casual, Sage Green (Optional) [No jeans] <br/><a href="https://oureverydaylife.com/what-is-beach-casual-attire-12271917.html" target="_blank" rel="noreferrer" className="u-line btn main-buttons btn-sm">Click for Examples</a> </h2>
        
        <strong>
          <h1 className="text-xl u-line mb-1">No Kids, Please! </h1>
        </strong>
        <h2>There will be music played with explicit language. Everyone will be able to relax!</h2>
        
        <strong>
          <h1 className="text-xl u-line mt-1">PARKING (None at Reception) </h1>
        </strong>
        

        
        <span className="">For the ceremony, you have the option of parking at the beach, and then traveling back to the hotel to get ready for the reception. <strong>Please, utilize apps like Lyft and Uber for the reception.</strong> </span>
        <br/><a href="https://www.hotels.com/Hotel-Search?adults=2&d1=2022-11-11&d2=2022-11-13&destination=Pawleys%20Island%2C%20South%20Carolina%2C%20United%20States%20of%20America&endDate=2022-11-13&latLong=33.433342%2C-79.121361&regionId=55498&selected=&semdtl=&sort=RECOMMENDED&startDate=2022-11-11&theme=&useRewards=false&userIntent=" target="_blank" rel="noreferrer" className="u-line btn main-buttons btn-sm">Find Hotels</a> 


      </div>
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