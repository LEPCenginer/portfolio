/* ==========================================================
   06. JavaScript interactions
   ========================================================== */

const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");
const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.querySelector(".back-to-top");

// Navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinksContainer.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinksContainer) {
      navLinksContainer.classList.remove("open");
    }
  });
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => observer.observe(element));

// Active nav link on scroll
const sections = document.querySelectorAll("main section[id]");
const activateLink = () => {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
};

window.addEventListener("scroll", activateLink);
activateLink();

// Back to top button visibility
window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.style.opacity = window.scrollY > 600 ? "1" : "0";
    backToTop.style.pointerEvents = window.scrollY > 600 ? "auto" : "none";
  }
});

// Basic form interaction
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) {
      button.textContent = "Mensaje enviado";
      setTimeout(() => {
        button.textContent = "Enviar";
      }, 1800);
    }
  });
}
