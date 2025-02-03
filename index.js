const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
});

observer.observe(document.getElementById("main-page"));
observer.observe(document.getElementById("product-page"));
observer.observe(document.getElementById("product-gallery"));
observer.observe(document.getElementById("promotion-page"));
