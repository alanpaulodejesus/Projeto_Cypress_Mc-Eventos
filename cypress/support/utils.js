
function getFutureDate(daysAhead = 1) {
  const today = new Date();
  today.setDate(today.getDate() + daysAhead);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

module.exports = {
  getFutureDate
};