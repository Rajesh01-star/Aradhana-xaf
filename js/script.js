const revealCallBack = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  else entry.target.classList.remove("section--hidden");

  // unobserving the target section
  observer.unobserve(entry.target);
};

const revealObserver = new IntersectionObserver(revealCallBack, {
  root: null,
  threshold: 0.15,
});

const instaBtn = document.querySelector("#instagram");
const linkBtn = document.querySelector("#linkedIn");
instaBtn.addEventListener("click", function () {
  location.href = "https://www.instagram.com/aradhna_xaf/";
});
linkBtn.addEventListener("click", function () {
  location.href = "#";
});

function myfunction() {
  document.querySelector("#loading").style.display = "none";
}

// scrollReveal
ScrollReveal().reveal(".heroHolder");
ScrollReveal().reveal(".image");
ScrollReveal().reveal(".car");
ScrollReveal().reveal(".meditate");
ScrollReveal().reveal(".tatoo");
