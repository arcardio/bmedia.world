
function enterSite() {
  document.querySelector('.entrance').style.display = 'none';
  document.querySelector('.main-content').classList.remove('hidden');
}

function showSection(sectionId) {
  document.querySelectorAll('.info-section').forEach(el => el.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}
