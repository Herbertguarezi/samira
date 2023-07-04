const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.8;
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionViseble = sectionTop - windowMetade < 0;
    if (isSectionViseble) {
      section.classList.add("ativo");
    }
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);
