
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllEvents } from "../api";
import EventCard from '../components/EventCard';


const Events = () => {
    const [events, setEvents] = useState([]);

     useEffect(() => {
        const fetchData = async () => {
          const eventData = await getAllEvents();
          
          setEvents(eventData);

        };
        fetchData();
      }, []);

  return (
    <section className="min-h-screen w-full bg-white text-black flex items-center justify-center px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
            Upcoming Events
          </h2>

          {events.length === 0 ? (
            <p className="text-gray-500 text-center">No events available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
              <EventCard key={event.event_id} event={event} />
            ))}
            </div>
          )}
        </motion.div>
      </section>
  )
}

export default Events