/* LILAX V3 Performance Edition */

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }
}, {
  threshold: 0.10,
  rootMargin: "0px 0px -30px 0px"
});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

function updateTorontoClock() {
  const now = new Date();

  document.getElementById("torontoTime").textContent =
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(now);

  document.getElementById("torontoDate").textContent =
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(now);
}

updateTorontoClock();
setInterval(updateTorontoClock, 1000);

/* Display values are ready for a future real analytics/release API. */
document.getElementById("vpnDownloads").textContent = "12.4K";
document.getElementById("vpnDownloadsLarge").textContent = "12.4K";
