function enterSite() {
  document.getElementById('entrance').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
}

window.onload = function() {
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (backBtn) {
    backBtn.addEventListener('click', function() {
      document.getElementById('mainContent').classList.add('hidden');
      document.getElementById('entrance').style.display = 'flex';
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      alert('Page 2 not designed yet');
    });
  }
};
