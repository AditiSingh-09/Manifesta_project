import React, { useState } from "react";
import { joinClub } from "../api";

const JoinClub = () => {
  const [formData, setFormData] = useState({ name: "", email: "", club_id: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await joinClub(formData);
    alert("Joined the club!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Join a Club</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2" placeholder="Your Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input className="w-full border p-2" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input className="w-full border p-2" placeholder="Club ID" onChange={(e) => setFormData({ ...formData, club_id: e.target.value })} />
        <button className="bg-teal-500 text-white px-4 py-2 rounded" type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinClub;
