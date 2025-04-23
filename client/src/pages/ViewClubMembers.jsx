import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMembersByClub } from "../api";

const ViewClubMembers = () => {
  const { clubId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getMembersByClub(clubId);
      setUsers(data);
    };

    fetchUsers();
  }, [clubId]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#a85f92]">Members: {clubId}</h2>
      
      {users.length === 0 ? (
        <p className="text-gray-600">No users have registered for this event yet.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.user_id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewClubMembers;
