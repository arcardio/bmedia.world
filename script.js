// Enter button
function enterSite() {
  const entrance = document.getElementById('entrance');
  const main = document.getElementById('mainContent');

  entrance.classList.add('fade-out');

  setTimeout(() => {
    entrance.style.display = 'none';
    main.classList.remove('hidden');
    main.classList.add('fade-in');
  }, 600);
}

// Back button
function goBack() {
  const entrance = document.getElementById('entrance');
  const main = document.getElementById('mainContent');

  main.classList.add('fade-out');

  setTimeout(() => {
    main.classList.add('hidden');
    main.classList.remove('fade-out');
    entrance.style.display = 'flex';
    entrance.classList.remove('fade-out');
    entrance.classList.add('fade-in');
  }, 600);
}

// Continue button
function goNext() {
  alert('Next page coming next — this will be your interactive hub.');
}

// Add event listeners in case button IDs are used
document.getElementById('backBtn').addEventListener('click', goBack);
document.getElementById('nextBtn').addEventListener('click', goNext);
