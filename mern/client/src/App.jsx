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
      </Routes>
    </Router>
  );
}

export default App;