import React, { useEffect, useState } from "react";
import { getMyEvents } from "../api";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      const data = await getMyEvents(); // implement this in api.js based on user
      setEvents(data);
    };
    fetchMyEvents();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Registered Events</h2>
      {events.length === 0 ? (
        <p>No registered events.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.event_id} className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
              <p className="text-sm text-gray-600">{new Date(event.event_date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyEvents;
