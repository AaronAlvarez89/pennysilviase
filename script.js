function redirectToOffer() {
  window.open('https://glitchy.go2cloud.org/aff_c?offer_id=795&aff_id=4035', '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('getYoursBtn');

  button.addEventListener('click', function() {
    const originalText = button.textContent;
    
    // Show loading state
    button.textContent = 'Redirecting...';
    button.style.opacity = '0.8';
    button.disabled = true; // Prevent double clicks

    // Trigger redirect
    redirectToOffer();

    // Restore button after 1.2 seconds (feels natural)
    setTimeout(() => {
      button.textContent = originalText;
      button.style.opacity = '1';
      button.disabled = false;
    }, 1200);
  });

  // Smooth card entrance animation
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';

  setTimeout(() => {
    card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});
