import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import AddMember from './pages/AddMember';
import RegisterEvent from './pages/RegisterEvent';
import Clubs from './pages/Clubs';
import ViewEvents from './pages/viewEvents';
import ViewClubMembers from './pages/ViewClubMembers';
import Events from './pages/Events';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/add-member/:clubId" element={<AddMember />} />
        {/* <Route path="/register-event" element={<RegisterEvent />} /> */}
        <Route path="/register-event/:eventId" element={<RegisterEvent />} />
        <Route path="/view-event/:eventId" element={<ViewEvents />} />
        <Route path="/view-event" element={<Events />} />
        <Route path="/view-members/:clubId" element={<ViewClubMembers />} />
        <Route path="/clubs" element={<Clubs />} />
        
      </Routes>
    </Router>
  );
};

export default App;
