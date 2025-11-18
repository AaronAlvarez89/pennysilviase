// script.js  →  Open in SAME TAB version
function redirectToOffer() {
  // This replaces the current page (same tab)
  window.location.href = 'https://glitchy.go2cloud.org/aff_c?offer_id=795&aff_id=4035';
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('getYoursBtn');

  button.addEventListener('click', function () {
    const originalText = button.textContent;

    // Show loading feedback
    button.textContent = 'Redirecting...';
    button.style.opacity = '0.8';
    button.disabled = true; // prevent double-clicks

    // Actually redirect (same tab)
    redirectToOffer();

    // Optional: restore button text after a short delay
    // (user won't see it because the page is already leaving)
    setTimeout(() => {
      button.textContent = originalText;
      button.style.opacity = '1';
      button.disabled = false;
    }, 1200);
  });

  // Card entrance animation (unchanged)
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';

  setTimeout(() => {
    card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});
