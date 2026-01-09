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

function goNext() {
  alert('Next page coming next — this will be your interactive hub.');
}
