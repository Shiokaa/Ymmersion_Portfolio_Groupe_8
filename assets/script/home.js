const linkName = document.querySelectorAll(".link-name");
const triangle = document.querySelectorAll(".triangle-code");
const svg = document.querySelectorAll(".svg");

svg.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    linkName[index].classList.toggle("active");
    triangle[index].classList.toggle("active");
  });

  el.addEventListener("mouseout", () => {
    linkName[index].classList.toggle("active");
    triangle[index].classList.toggle("active");
  });
});
