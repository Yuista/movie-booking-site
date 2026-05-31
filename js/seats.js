const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');

export function refreshTotal(ticketPrice) {
  const picked = document.querySelectorAll('.row .seat.selected');
  countEl.textContent = picked.length;
  totalEl.textContent = picked.length * ticketPrice;
}

export function initSeats(getPrice) {
  document.querySelector('.container').addEventListener('click', e => {
    const seat = e.target;
    if (!seat.classList.contains('seat') || seat.classList.contains('occupied')) return;
    seat.classList.toggle('selected');
    refreshTotal(getPrice());
  });
}
