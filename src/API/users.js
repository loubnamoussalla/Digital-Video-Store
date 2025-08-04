import { jwtDecode } from "jwt-decode"; // ✅ correct

const API_BASE = "https://digital-store-be.onrender.com/users";
export const registerUser = async (user) => {
  const res = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  let data;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error("Invalid response from server");
  }

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};


export const loginUser = async (credentials) => {
  const res = await fetch("https://digital-store-be.onrender.com/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
 
  let data;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error("Invalid response from server");
  }

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};


export const getUserById = async (token) => {
  const decoded = jwtDecode(token);
  const userId = decoded.sub ; 
  // const userId =  decoded._id; 
  console.log(`userId ${userId}`)
  console.log(`token ${token}`)
  const res = await fetch(`https://digital-store-be.onrender.com/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
};
