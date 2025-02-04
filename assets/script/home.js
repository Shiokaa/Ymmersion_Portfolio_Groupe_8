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

const darkmode = document.querySelector(".colormode");
darkmode.addEventListener("click", () => {
  document.body.classList.toggle("lightmode");
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".top-left", {
    x: -100, // Arrive depuis la gauche
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, // Décale les animations si plusieurs éléments
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".top-right", {
    y: -150, // Arrive depuis la gauche
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, // Décale les animations si plusieurs éléments
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".bottom-left", {
    y: 200, // Arrive depuis la gauche
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, // Décale les animations si plusieurs éléments
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".bottom-right", {
    x: 250, // Arrive depuis la gauche
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, // Décale les animations si plusieurs éléments
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".svg", {
    x: 250, // Arrive depuis la gauche
    opacity: 0,
    duration: 2,
    ease: "power2.out",
    stagger: 0.3, // Décale les animations si plusieurs éléments
  });
});

document.querySelectorAll(".container").forEach((el, index, allContainers) => {
  const img = el.querySelector(".img"); // Récupère uniquement l'image de CE container

  if (!img) return; // Si pas d'image, on évite une erreur

  img.addEventListener("click", () => {
    // Réinitialisation avant d'agrandir un seul container
    gsap.to(allContainers, {
      scale: 1,
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Agrandit l'élément cliqué
    gsap.to(el, { scale: 2, duration: 0.5, ease: "power2.out" });

    // Déplace les autres containers
    allContainers.forEach((other, i) => {
      if (other !== el) {
        const direction = i < index ? -1 : 1; // Gauche ou droite
        gsap.to(other, {
          opacity: 0.5,
          x: direction * 100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  });

  // Réinitialisation au survol de la souris
  img.addEventListener("mouseout", () => {
    gsap.to(allContainers, {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});
