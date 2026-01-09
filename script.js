function enterSite() {
  document.getElementById('entrance').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
}

document.getElementById('backBtn').addEventListener('click', function() {
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('entrance').style.display = 'flex';
});

document.getElementById('nextBtn').addEventListener('click', function() {
  alert('Page 2 not designed yet');
});
