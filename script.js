document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(section => {
    observer.observe(section);
  });
});
