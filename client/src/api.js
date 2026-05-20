// // api.js

// const BASE_URL = "http://localhost:5000";

// // Function to get all events
// export const getAllEvents = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/events`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch events");
//     }
//     return await response.json(); // Assuming the response is a JSON array of events
//   } catch (error) {
//     console.error(error);
//     return []; // Return an empty array in case of error
//   }
// };

// // Function to get all clubs
// export const getAllClubs = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/clubs`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch clubs");
//     }
//     return await response.json(); // Assuming the response is a JSON array of clubs
//   } catch (error) {
//     console.error(error);
//     return []; // Return an empty array in case of error
//   }
// };

// // Function to create an event
// export const createEvent = async (eventData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/events`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(eventData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create event");
//     }
//     return await response.json(); // Return created event data
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Function to add a member to a club
// export const addClubMember = async (clubId, memberData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/clubs/${clubId}/members`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(memberData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to add member");
//     }
//     return await response.json(); // Return the updated club data
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Function to register for an event
// export const registerUserForEvent = async (eventId, userData) => {
//   try {
//     const response = await fetch(`${BASE_URL}/events/${eventId}/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to register for event");
//     }
//     return await response.json(); // Return registration success
//   } catch (error) {
//     console.error(error);
//   }
// };


import axios from "axios";

const BASE_URL = "https://manifesta-project-1.onrender.com";

// Function to get all clubs
export const getAllClubs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/clubs`);
    return response.data; // Axios automatically parses the response as JSON
  } catch (error) {
    console.error("Error fetching clubs:", error);
    return []; // Return an empty array in case of error
  }
};

// Function to create a club
export const createClub = async (clubData) => {
  try {
    const response = await axios.post(`${BASE_URL}/clubs`, clubData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return created club data
  } catch (error) {
    console.error("Error creating club:", error);
  }
};

// Function to get members by club
export const getMembersByClub = async (clubId) => {
  try {
    const response = await axios.get(`${BASE_URL}/club-members/${clubId}`);
    return response.data; // Return list of members in the club
  } catch (error) {
    console.error("Error fetching club members:", error);
    return []; // Return empty array in case of error
  }
};

// Function to add a member to a club
export const addClubMember = async ( memberData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/club-members/`,
      memberData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return updated club data
  } catch (error) {
    console.error("Error adding member to club:", error);
  }
};

// Function to create an event
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${BASE_URL}/events`, eventData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return created event data
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

// Function to get all events
export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data; // Axios automatically parses the response as JSON
  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // Return an empty array in case of error
  }
};


export const getUsersForEvent = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users for event:", error);
    return [];
  }
};


// Function to register a user for an event
export const registerUserForEvent = async (userData) => {
  console.log(userData)
  try {
    const response = await axios.post(
      `${BASE_URL}/registrations`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return registration success data
  } catch (error) {
    console.error("Error registering user for event:", error);
  }
};

// Function to get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data; // Return a list of all users
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return an empty array in case of error
  }
};

// Function to create a user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return created user data
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
