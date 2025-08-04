
const API_BASE = "https://digital-store-be.onrender.com/media";

export const getAllMovies = async () => {
  const res = await fetch(`${API_BASE}/movies`);
  return res.json();
};

export const getAllTVShows = async () => {
  const res = await fetch(`${API_BASE}/tvshows`);
  return res.json();
};

export const getMediaById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`);
  return res.json();
};

export const searchMediaByTitle = async (title) => {
  const res = await fetch(`${API_BASE}/search/${title}`);
  return res.json();
};

export const getFeatured = async (type) => {
  const res = await fetch(`${API_BASE}/featured?type=${type}`);
  return res.json();
};

export const updateMedia = async (id, data) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteMedia = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
