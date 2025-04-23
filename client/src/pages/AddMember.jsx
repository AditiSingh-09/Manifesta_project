import React, { useState } from "react";
import { addClubMember } from "../api";
import { useParams } from 'react-router-dom';

const AddMember = () => {
  const { clubId } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "", club_id: +clubId });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addClubMember(formData);
    alert("Member added!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input className="w-full border p-2" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        {/* <input className="w-full border p-2" placeholder="Club ID" onChange={(e) => setFormData({ ...formData, club_id: e.target.value })} /> */}
        <button className="bg-[#93cbe3] hover:bg-[#85bed6] cursor-pointer text-white px-4 py-2 rounded" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMember;
