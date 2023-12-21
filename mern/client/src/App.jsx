// import { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import Header from "./Components/header";
import Info from "./Components/info";
import WhatWeDo from "./Components/WhatWeDo";
import Footer from "./Components/footer";
import SponsorLogo from "./Components/sponsorLogo";
// import Dashboard from "./Components/DashBoard/dashboard";
// import Sidebar from "./Components/DashBoard/sidebar";
// import Login from "./Components/LoginForm/login";
// import Login from "./Components/login";
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhatWeDo />
      <Info />
      <SponsorLogo />
      <Footer />
      {/* <Sidebar />  */}
      {/* <Dashboard /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
