import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersForEvent } from "../api";

const ViewEvents = () => {
  const { eventId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsersForEvent(eventId);
      console.log(data);
      
      setUsers(data);
    };

    fetchUsers();
  }, [eventId]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-[#a85f92]">Users Registered for Event ID: {eventId}</h2>
      
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

export default ViewEvents;
