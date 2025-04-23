import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center px-6 py-4 text-black">
      <Link to='/'>
      <h1 className="text-2xl font-bold font-['Special_Gothic,'_sans-serif']">Manifesta</h1>
      </Link>
      <ul className="flex gap-6 text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-event">Create Event</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/view-event">Events</Link></li>
        {/* <li><Link to="/add-member">Add Member</Link></li>
        <li><Link to="/register-event">Register</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
