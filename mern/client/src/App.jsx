import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import WhatWeDo from './Components/WhatWeDo';
import Info from './Components/info';
import SponsorLogo from './Components/sponsorLogo';
import Footer from './Components/footer';
import Dashboard from './Components/DashBoard/dashboard';
import Login from "./Components/login";
import Register from "./Components/register"
import PersonalInfo from "./Components/Personal_Info/personal_Info";
import RequestListing from "./Components/DashBoard/RequestListing";
import Analytics from './Components/DashBoard/Analytics';
import GoogleMaps from './Components/DashBoard/GoogleMaps';
import About from './Components/about';
import Contact from './Components/contact';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <WhatWeDo />
              <Info />
              <SponsorLogo />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personal-info" element={<PersonalInfo />} />

        <Route path="/new-request" element={<RequestListing />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/map" element={<GoogleMaps />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;