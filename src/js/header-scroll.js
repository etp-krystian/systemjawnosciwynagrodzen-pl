const header = document.querySelector(".site-header--overlay");

if (header) {
  const toggleScrolled = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}
