const navLinkEmts = document.querySelectorAll(".nav-link");
const sectionEmts = document.querySelectorAll(".section");

let currentSection = "about";

window.addEventListener("scroll", () => {
  sectionEmts.forEach((sectionEmt) => {
    if (window.scrollY >= sectionEmt.offsetTop - sectionEmt.clientHeight / 3) {
      currentSection = sectionEmt.id;
    }
  });

  navLinkEmts.forEach((navLinkEmt) => {
    if (navLinkEmt.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      navLinkEmt.classList.add("active");
    }
  });
});
