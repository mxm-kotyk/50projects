const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");

const handleClick = (e) => {
  const clickedBtn = e.currentTarget.id;
  console.log(clickedBtn);
  if (clickedBtn === "open") {
    container.classList.add("show-nav");
  } else if (clickedBtn === "close") {
    container.classList.remove("show-nav");
  }
};

openBtn.addEventListener("click", handleClick);
closeBtn.addEventListener("click", handleClick);
