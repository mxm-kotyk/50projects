const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// const generateJoke = () => {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.textContent = data.joke;
//     });
// };

const generateJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();

  jokeEl.textContent = data.joke;
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
