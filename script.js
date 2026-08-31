// Misteri Obat Sang Raja
// Script sederhana untuk membuat halaman lebih interaktif.

document.addEventListener("DOMContentLoaded", () => {

// Menambahkan efek saat bagian halaman terlihat
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
},
{
threshold: 0.08
}
);

sections.forEach((section) => {
observer.observe(section);
});

// Navigasi otomatis menandai bagian yang sedang dibaca
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach((section) => {
  const top = section.offsetTop - 150;

  if (window.scrollY >= top) {
    current = section.id;
  }
});

navLinks.forEach((link) => {
  link.classList.remove("active");

  if (link.getAttribute("href") === "#" + current) {
    link.classList.add("active");
  }
});

});

});
