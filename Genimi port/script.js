document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Scroll Reveal Animation ---
    
    const reveals = document.querySelectorAll('.reveal');
    const projectCards = document.querySelectorAll('.feature-card, .pricing-card');

    function handleScrollReveal() {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150; // Distance from viewport bottom to trigger reveal

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    // --- 2. Dynamic Card Glow on Hover (Mouse Track) ---
    // Gives the cards a secondary, localized glow effect based on cursor position.

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            // Create a subtle radial spotlight that follows the cursor
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.05) 0%, rgba(18, 18, 24, 1) 100%)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset background when the mouse leaves
            card.style.background = 'var(--color-bg-secondary)'; 
        });
    });


    // --- Initialization ---
    
    // Run once on load to show elements already in view
    handleScrollReveal(); 
    
    // Attach scroll event listener
    window.addEventListener('scroll', handleScrollReveal);
});