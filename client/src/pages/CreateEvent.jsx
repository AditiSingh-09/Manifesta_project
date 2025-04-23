import React, { useState, useEffect } from "react";
import { createEvent, getAllClubs } from "../api";

const CreateEvent = () => {
  const [formData, setFormData] = useState({ title: "", description: "", date: "" });
  const [clubs, setClubs] = useState([]);
  
  useEffect(() => {
    const fetchClubs = async () => {
      const data = await getAllClubs();
      setClubs(data);
    };
    fetchClubs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(formData);
    alert("Event created!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <textarea className="w-full border p-2" placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <input className="w-full border p-2" type="datetime-local" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        <select
          className="w-full border p-2"
          onChange={(e) => setFormData({ ...formData, club_id: e.target.value })}
          value={formData.club_id}
        >
          <option value="">Select a Club</option>
          {clubs.map((club) => (
            <option key={club.club_id} value={club.club_id}>
              {club.club_name}
            </option>
          ))}
        </select>

        <button className="bg-[#93cbe3] hover:bg-[#85bed6] cursor-pointer text-white px-4 py-2 rounded" type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;
