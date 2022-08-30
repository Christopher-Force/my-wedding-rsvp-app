import DetailsButton from "../Buttons/DetailsButton/Detailsbutton";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import MapButton from "../Buttons/MapButton/MapButton";
import RSVPButton from "../Buttons/RSVPButton/RSVPButton";
import '../Buttons/ChipButton/ChipButton.css';

export default function Contribute() {
  return (
    <div>
      <div>
          <div>
            <h1 className="date text-4xl flex mt-4">
              11.12.22
            </h1>
          </div>
          <div>
            <h2 className="names text-3xl">Christopher and Precious</h2>
            
          </div>
        </div>
      <div className="">
        <div className="">
          <h1 className="text-md u-line pb-2">Amazon Registry:</h1>
          <a href="https://amazon.com" class="amazon w-1/2" target="_blank" rel="noreferrer">Amazon Registry</a>
        </div>
        <br/>
        <div className="flex flex-col gap-2 mb-4">
          <h1><span className="text-md u-line">Contribute To Our Honeymoon Fund:</span> <h2 className="text-sm">Powered by Stripe</h2></h1>
          <a href="https://buy.stripe.com/7sI7waduj45IeMU6or" class="chipButton w-full" target="_blank" rel="noreferrer">Chip in $10</a>
          <a href="https://buy.stripe.com/bIY8Aedujau69sA3cc" class="chipButton w-full" target="_blank" rel="noreferrer">Chip in $25</a>
          <a href="https://buy.stripe.com/9AQeYC2PF31E0W49AB" class="chipButton w-full" target="_blank" rel="noreferrer">Chip in Custom Amount</a>
        </div>
      </div>
      <div className="flex gap-2 pb-2">
        <RSVPButton />
        <MapButton />
      </div>
      <div className='flex gap-2'>

        <HomeButton />
        <DetailsButton />
      </div>
    </div>
  )
}