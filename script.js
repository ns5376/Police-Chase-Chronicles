document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById("audioPlayer");

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;

        if (currentTime > 10.5 && currentTime < 12) {
            document.body.style.background = "rgba(255, 255, 255, 0.8)"; // Change to solid color
        } else if (currentTime > 17 && currentTime < 17.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 17.5 && currentTime < 18) {
            document.body.style.background = 'linear-gradient(to left, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 18 && currentTime < 18.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 18.5 && currentTime < 19) {
            document.body.style.background = 'linear-gradient(to left, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 19 && currentTime < 19.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 19.5 && currentTime < 20) {
            document.body.style.background = 'linear-gradient(to left, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 20 && currentTime < 20.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 20.5 && currentTime < 21) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 80 && currentTime < 81) {
            document.body.style.background = '#000000'; // Change to solid color
        
        } else if (currentTime > 81 && currentTime < 82) {
            document.body.style.background = 'linear-gradient(to right, #00ff00 50%, #010b1f 50%)';

        
        }else if (currentTime > 82 && currentTime < 83) {
            document.body.style.background = 'linear-gradient(to left, #00ff00 50%, #010b1f 50%)';}
        else if (currentTime > 113 && currentTime < 113.5) {
                document.body.style.background = 'linear-gradient(to right, #3c515f 50%, #010b1f 50%)';}
        else if (currentTime > 114 && currentTime < 114.5) {
                    document.body.style.background = 'linear-gradient(to right, #3c515f 50%, #010b1f 50%)';}
         else if (currentTime > 138.5 && currentTime < 139) {
            document.body.style.background = 'linear-gradient(to left, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 139 && currentTime < 139.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 139.5 && currentTime < 140) {
            document.body.style.background = 'linear-gradient(to left, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 140 && currentTime < 140.5) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)'; // Change to another solid color
        } else if (currentTime > 140.5 && currentTime < 141) {
            document.body.style.background = 'linear-gradient(to right, #ff0000 50%, #0000ff 50%)';} // Change to another solid color
        else {
            document.body.style.background = 'linear-gradient(to right, #010b1f 50%, #3c515f 50%)';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hoverAudio = document.getElementById('hoverAudio');

    const soundButton = document.getElementById('soundButton');

    // Play the audio when the mouse enters the button
    soundButton.addEventListener('mouseenter', () => {
        hoverAudio.play();
    });

    // Pause the audio when the mouse leaves the button
    soundButton.addEventListener('mouseleave', () => {
        hoverAudio.pause();
    });

    // Check if the audio has ended and reset its position if it has
    hoverAudio.addEventListener('ended', () => {
        hoverAudio.currentTime = 0; // Reset the audio to the start after finishing
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const slider = document.getElementById('audioSlider');
    const playButton = document.getElementById('playButton');
    const skipButton = document.getElementById('skipButton');
  
    // Play/pause button functionality
    playButton.addEventListener('click', function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'pause';
      } else {
        audioPlayer.pause();
        playButton.textContent = 'play';
      }
    });
  
    // Update audio time based on slider position
    slider.addEventListener('input', function() {
      const value = parseFloat(this.value);
      audioPlayer.currentTime = value * audioPlayer.duration / 100;
    });
  
    // Update slider position based on audio time
    audioPlayer.addEventListener('timeupdate', function() {
      const currentTime = audioPlayer.currentTime;
      const percentage = currentTime / audioPlayer.duration * 100;
      slider.value = percentage;
    });
  
    // Skip ahead button functionality
    skipButton.addEventListener('click', function() {
      audioPlayer.currentTime += 5; // Skip ahead by 5 seconds
    });
  });
  
