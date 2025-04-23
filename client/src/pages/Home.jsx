import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllEvents, getAllClubs } from "../api";
import EventCard from '../components/EventCard';
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await getAllEvents();
      const clubData = await getAllClubs();
      setEvents(eventData);
      setClubs(clubData);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-[url('/bg.jpeg')] bg-opacity-70 bg-cover bg-no-repeat relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <p className="text-xl md:text-2xl text-[#420f50] mb-2 font-medium">
            Why Plan When You Can Manifest?
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
            MANIFESTA
        </h1>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

   

      {/* Upcoming Events Section */}
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

      {/* Discover Clubs Section */}
      <section className="min-h-screen w-full bg-white flex items-center justify-center px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto w-full"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-gray-900">
            Discover Clubs
          </h2>

          {clubs.length === 0 ? (
            <p className="text-gray-500 text-center">No clubs found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <div key={club.club_id} className="border p-4 rounded shadow text-[#a6799b] hover:shadow-lg">
                  <h3 className="text-xl font-semibold">{club.club_name}</h3>
                  <p className="text-gray-700">{club.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
