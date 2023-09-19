const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const updateProgressBar = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width = `${
    ((currentActive - 1) / (circles.length - 1)) * 100
  }%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
};

const handleButtonClick = (direction) => {
  if (direction === "next") {
    currentActive += 1;
  } else if (direction === "prev") {
    currentActive -= 1;
  }

  if (currentActive < 1 || currentActive > circles.length) {
    return;
  }
  updateProgressBar();
};

next.addEventListener("click", () => handleButtonClick("next"));
prev.addEventListener("click", () => handleButtonClick("prev"));
