import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  if (window.location.host.split(".")[0] === "wedding") {
    return (
      <div className="App">
        <Hero />
      </div>
      // <Router>
      //   <div className="bg-black">
      //     <Wrapper>
      //       <div>
      //         <LandingNav />
      //       </div>
      //       <Routes>
      //         <Route path="/" element={<RoofLanding />} />
      //         <Route path="thankyou" element={<ThankYou />} />
      //       </Routes>
      //       {/* HIDDEN POPUP */}
      //       <div>
      //         <input type="checkbox" id="roof-popup" className="modal-toggle" />
      //         <label className="modal items-start lg:items-center pt-4 md:pt-8 " for="roof-popup">
      //           <label className="modal-box w-11/12 md:max-w-5xl pt-4 max-h-screen" for="">
      //             <PopupContact />
      //           </label>
      //         </label>
      //       </div>
      //     </Wrapper>
      //   </div>
      // </Router>
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
