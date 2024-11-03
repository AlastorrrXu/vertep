function togglePlay() {
    const audio = document.getElementById('audio');
    const vinyl = document.querySelector('.disc img');
  
    if (audio.paused) {
      audio.play();
      vinyl.classList.add('spin');
    } else {
      audio.pause();
      vinyl.classList.remove('spin');
    }
  }
  