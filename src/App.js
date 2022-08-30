import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useLayoutEffect } from 'react';
import MapPage from './Components/MapPage/MapPage';
import HeroText from './Components/Hero/HeroText/HeroText';
import RSVPPage from './Components/RSVPPage/RSVPPage';
import Contribute from './Components/Contribute/Contribute';
import Details from './Components/Details/Details';
import Banner from './Components/Banner/Banner';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  if (window.location.host.split(".")[0] === "wedding") {
    return (

      <div className="header fill-viewport">



        <Router>
          <Banner />
          <div className="inner-header flex">
            <Wrapper>

              <Routes>
                <Route path="/" element={<HeroText />} />
                <Route path="rsvp" element={<RSVPPage />} />
                <Route path="map" element={<MapPage />} />

                {/* <Route path="thankyou" element={<Thankyou />} /> */}
                <Route path="details" element={<Details />} />
                <Route path="contribute" element={<Contribute />} />
              </Routes>
            </Wrapper>
          </div>
        </Router>

        <div>
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(231, 255, 222,0.7" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(231, 255, 222,0.5)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(231, 255, 222,0.3)" />
              <use href="#gentle-wave" x="48" y="7" fill="rgba(231, 255, 222)" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Subdomain is not working properly. Please Contact Site Owner.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }


}

export default App;
