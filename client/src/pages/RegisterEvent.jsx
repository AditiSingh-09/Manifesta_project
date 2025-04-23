// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { registerUserForEvent } from "../api";

// const RegisterEvent = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await registerUserForEvent({ ...formData, event_id: eventId });
//     alert("Registered for the event!");
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full border p-2"
//           placeholder="Your Name"
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           className="w-full border p-2"
//           placeholder="Your Email"
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <button
//           className="bg-[#a85f92] text-white px-4 py-2 rounded hover:bg-[#935480] cursor-pointer"
//           type="submit"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterEvent;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { registerUserForEvent } from "../api";

const RegisterEvent = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send registration data
    await registerUserForEvent({ ...formData, event_id: eventId });
    alert("Registered for the event!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="w-full border p-2"
          placeholder="Your Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button
          className="bg-[#a85f92] text-white px-4 py-2 rounded hover:bg-[#935480] cursor-pointer"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterEvent;

