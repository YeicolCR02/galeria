document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('songAudio');
    const playIcon = playButton.querySelector('.icon-play');
    const pauseIcon = playButton.querySelector('.icon-pause');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });

    audio.addEventListener('ended', () => {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    });
});
