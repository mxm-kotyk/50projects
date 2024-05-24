const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const stopSounds = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("button");

  button.textContent = sound.toUpperCase();

  button.addEventListener("click", () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(button);
});
