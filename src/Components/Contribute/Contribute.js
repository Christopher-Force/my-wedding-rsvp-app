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
        <br/>
      <div>
        <h1>Amazon Registry:</h1>
      </div>
      <br/>
      <div className="flex flex-col gap-2 mb-8">
        <h1>Contribute To Our Honeymoon Fund:</h1>
        <a href="https://buy.stripe.com/7sI7waduj45IeMU6or" class="chipButton w-full">Chip in $10</a>
        <a href="https://buy.stripe.com/bIY8Aedujau69sA3cc" class="chipButton w-full">Chip in $25</a>
        <a href="https://buy.stripe.com/3csg2GbmbcCefQY8wy" class="chipButton w-full">Chip in $50</a>
        <a href="https://buy.stripe.com/9AQeYC2PF31E0W49AB" class="chipButton w-full">Chip in Custom Amount</a>
      </div>
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