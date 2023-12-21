// // import { useState } from 'react';
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-solid-svg-icons";
// import Header from "./Components/header";
// import Info from "./Components/info";
// import WhatWeDo from "./Components/WhatWeDo";
// import SponsorLogo from "./Components/sponsorLogo";
// import Footer from "./Components/footer";
// // import Login from "./Components/login";
// // import PersonalInfo from "./Components/Personal_Info/personal_Info";
// // import GetInTouch from "./Components/GetInTouch/GetInTouch";
// import Dashboard from "./Components/DashBoard/dashboard";
// import './App.css';

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header />
//       <WhatWeDo />
//       <Info />
//       <SponsorLogo />
//       <Footer />
//       {/* <GetInTouch /> */}
//       {/* <Login /> */}
//       {/* <PersonalInfo /> */}
//       <Dashboard />
//     </>
//   );
// }

// export default App;


// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import WhatWeDo from './Components/WhatWeDo';
import Info from './Components/info';
import SponsorLogo from './Components/sponsorLogo';
import Footer from './Components/footer';
import Dashboard from './Components/DashBoard/dashboard';
import Login from "./Components/login";
import PersonalInfo from "./Components/Personal_Info/personal_Info";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <WhatWeDo />
            <Info />
            <SponsorLogo />
            <Footer />
          </>
        } />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;