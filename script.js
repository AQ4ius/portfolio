function openLightbox(image) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = image.src;

  // Add animation
  setTimeout(() => {
    lightbox.classList.add("show");
  }, 10);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  // Trigger zoom out animation
  lightbox.classList.remove("show");

  // Wait for animation before hiding
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

gifs.forEach(gif => {
  gif.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = gif.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Modal logic
const modal = document.getElementById("gifModal");
const modalImg = document.getElementById("expandedGif");
const gifs = document.querySelectorAll(".expandable-gif");
const closeBtn = document.querySelector(".close");

gifs.forEach(gif => {
  gif.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = gif.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


