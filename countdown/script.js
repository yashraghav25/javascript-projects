document.addEventListener("DOMContentLoaded", () => {
  const date = document.getElementById("date");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const btn = document.getElementById("btn");
  const countdownDisplay = document.getElementById("countdown");
  btn.addEventListener("click", () => {
    const x = parseInt(date.value.trim());
    const y = parseInt(month.value.trim()) - 1; // JavaScript months are 0-indexed
    const z = parseInt(year.value.trim());
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      alert("Please enter a valid date!");
      return;
    }

    countDown(x, y, z);
  });

  function countDown(day, month, year) {
    clearInterval(window.countdownInterval);
    const targetDate = new Date(year, month, day).getTime();
    if (targetDate <= new Date().getTime()) {
      alert("Please enter a future date!");
      return;
    }
    window.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
      if (timeLeft < 0) {
        clearInterval(window.countdownInterval);
        countdownDisplay.textContent = "Countdown finished!";
        return;
      }
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
});
