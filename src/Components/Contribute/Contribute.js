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
      <div className="mt-2">
        <div className="mx-2 ">
          <h1 className="text-md u-line pb-2">Wedding Registry:</h1>
          <a href="https://www.amazon.com/wedding/precious-holmes-christopher-force--november-2022/registry/2JCAICRB6EUM8" class="amazon w-full max-w-[500px]" target="_blank" rel="noreferrer">Amazon Registry</a>
        </div>
        <div className="flex flex-col gap-2  mt-4 mb-4 ">
          <h1><span className="text-md u-line">Contribute To Our Honeymoon Fund:</span> <h2 className="text-sm">Powered by Stripe</h2></h1>
          <div className="justify-center flex flex-col gap-2 items-center mx-2">
            <a href="https://buy.stripe.com/7sI7waduj45IeMU6or" class="chipButton w-full max-w-[500px]" target="_blank" rel="noreferrer">Chip in $10</a>
            <a href="https://buy.stripe.com/bIY8Aedujau69sA3cc" class="chipButton w-full max-w-[500px]" target="_blank" rel="noreferrer">Chip in $25</a>
            <a href="https://buy.stripe.com/9AQeYC2PF31E0W49AB" class="chipButton w-full max-w-[500px]" target="_blank" rel="noreferrer">Chip in Custom Amount</a>
          </div>
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