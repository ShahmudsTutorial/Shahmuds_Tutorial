document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in animation after page load
    const overlay = document.querySelector('.transition-overlay');
    overlay.classList.add('fade-in');

    // Remove overlay after animation completes
    overlay.addEventListener('animationend', function () {
        overlay.style.display = 'none';
    });
});