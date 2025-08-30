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

