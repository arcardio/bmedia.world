const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.fade-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    document.getElementById(targetId).classList.remove('hidden');
    document.getElementById(targetId).classList.add('fade-in');
  });
});
