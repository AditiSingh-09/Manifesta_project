import React, { useEffect, useState } from "react";
import { getAllClubs } from "../api";
import ClubCard from "../components/ClubCard";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const data = await getAllClubs();
      setClubs(data);
    };
    fetchClubs();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">All Clubs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map(club => <ClubCard key={club.club_name} club={club} />)}
        
      </div>
    </div>
  );
};

export default Clubs;
