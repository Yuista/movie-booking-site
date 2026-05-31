import { Movie } from './Movie.js';

const API_URL = 'http://localhost:3000/movies';

export async function loadMovies() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`HTTP error ${res.status}`);
  const data = await res.json();
  return data.map(m => new Movie(m));
}
