const lables = document.querySelectorAll(".form-control label");

lables.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
    )
    .join("");
});
