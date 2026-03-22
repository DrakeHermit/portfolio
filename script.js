window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.body.classList.remove("loading");
  }, 1600);
});

// Nav background on scroll
const nav = document.querySelector("nav");
const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Scroll reveal observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Parallax on hero kanji
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const kanjiEls = document.querySelectorAll(".hero-kanji");
  kanjiEls.forEach((el) => {
    el.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
  });
});
