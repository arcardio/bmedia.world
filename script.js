
function enterSite() {
  document.getElementById("entrance").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
}

function showSection(id) {
  const sections = ["about", "services", "contact"];
  sections.forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function goToBooking() {
  alert("Redirecting to payment portal for consultation booking...");
}

function goToRental() {
  alert("Redirecting to equipment rental information...");
}
