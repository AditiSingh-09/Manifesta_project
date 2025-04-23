// components/EventCard.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();     
    e.stopPropagation();
    navigate(`/register-event/${event.event_id}`);
  };

  const handleClick = (e) => {
    e.preventDefault();     
    e.stopPropagation();     
    navigate(`/view-event/${event.event_id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative border border-[#ceb9c0] rounded-lg shadow-md p-4 m-2 bg-white transition-transform transform hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-xl text-[#c45c7f] font-bold ">{event.title}</h2>
      <p className="text-gray-700">{event.description}</p>
      <p className="text-sm text-gray-500">Date: {new Date(event.event_date).toLocaleDateString()}</p>

      <button
        onClick={handleRegisterClick}
        className="absolute bottom-4 right-4 bg-[#8bbbda] text-white px-4 py-1 rounded hover:bg-[#c15e83] transition"
      >
        Register
      </button>
    </div>
  );
};

export default EventCard;
