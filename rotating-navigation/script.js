const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const content = document.querySelector(".content");

const handleClick = (e) => {
  const clickedBtn = e.currentTarget.id;
  console.log(clickedBtn);
  if (clickedBtn === "open") {
    container.classList.add("show-nav", "no-scroll", "enlarged");
  } else if (clickedBtn === "close") {
    container.classList.remove("show-nav", "no-scroll");
    setTimeout(() => {
      container.classList.remove("enlarged");
    }, 500);
  }
};

openBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClick);
