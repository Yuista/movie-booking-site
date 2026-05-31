import { loadMovies } from './api.js';
import { initSeats, refreshTotal } from './seats.js';

const select = document.getElementById('movie');
let ticketPrice = 0;

initSeats(() => ticketPrice);

loadMovies()
  .then(movies => {
    select.innerHTML = movies.map(m => `<option value="${m.price}">${m.label}</option>`).join('');
    ticketPrice = movies[0].price;
    refreshTotal(ticketPrice);
  })
  .catch(err => {
    console.error('Failed to load movies:', err);
    select.innerHTML = '<option value="">Kunde inte ladda filmer</option>';
  });

select.addEventListener('change', () => {
  ticketPrice = parseInt(select.value, 10) || 0;
  refreshTotal(ticketPrice);
});
