const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");
const revealTargets = document.querySelectorAll(".hero-copy, .hero-card, .section-heading, .about-text, .resume-card, .skill-card, .project-card, .contact-card, .contact-form");
const formStatus = document.querySelector("#form-status");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      navAnchors.forEach((anchor) => anchor.classList.remove("active"));
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, {
  threshold: 0.45
});

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

revealTargets.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

const urlParams = new URLSearchParams(window.location.search);
if (formStatus && urlParams.get("submitted") === "true") {
  formStatus.hidden = false;
}
