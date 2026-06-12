const header = document.querySelector(".site-header--overlay");
const ribbon = document.querySelector(".home-top-ribbon");

if (header) {
  const toggleScrolled = () => {
    const isScrolled = window.scrollY > 12;

    header.classList.toggle("is-scrolled", isScrolled);

    if (ribbon) {
      ribbon.classList.toggle("is-scrolled", isScrolled);
    }
  };

  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}
