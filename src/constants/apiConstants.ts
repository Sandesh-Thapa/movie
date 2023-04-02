const API_KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API;

export const TRENDING_TODAY = `${API}trending/movie/day?api_key=${API_KEY}`;
export const TRENDING_WEEK = `${API}trending/movie/week?api_key=${API_KEY}`;
