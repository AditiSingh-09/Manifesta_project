import React from 'react';
import { useNavigate } from "react-router-dom";

const ClubCard = ({ club }) => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();     
    e.stopPropagation();
    navigate(`/add-member/${club.club_id}`);
  };

  const handleClick = (e) => {
    e.preventDefault();     
    e.stopPropagation();
    navigate(`/view-members/${club.club_id}`);
  };

  return (
    <div onClick={handleClick }
    className="relative border p-4 rounded-lg shadow hover:shadow-xl transition duration-300 bg-white">
      <h3 className="text-xl font-bold text-[#a85f92] mb-2">{club.club_name}</h3>
      <p className="text-gray-600 mb-3">{club.description}</p>
      <button
        onClick={handleRegisterClick}
        className="absolute bottom-4 right-4 bg-[#8bbbda] text-white px-4 py-1 rounded hover:bg-[#a85f92] transition"
      >Add Member</button>
      {/*<div className="text-sm text-gray-500">Club ID: {club.club_id}</div> */}
    </div>
  );
};

export default ClubCard;
