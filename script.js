function redirectToOffer() {
  window.open('https://glitchy.go2cloud.org/aff_c?offer_id=795&aff_id=4035', '_blank');
}

// Add some interactive feedback
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.get-yours-btn');
  
  button.addEventListener('click', function() {
    // Add a brief loading state
    const originalText = button.textContent;
    button.textContent = 'Redirecting...';
    button.style.opacity = '0.8';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.opacity = '1';
    }, 1000);
  });
  
  // Add subtle animations on load
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    card.style.transition = 'all 0.5s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});
