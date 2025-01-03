// Function to smoothly scroll to a section
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to navbar links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            smoothScroll(targetId); // Call the smooth scroll function
        });
    });
});

// Function to show contact information
function showContactInfo() {
    alert("Hubungi kami di: ADMIN | (0821 2259 6405) atau Instagram: @kimurangbaraya");
}

// Add event listener for contact info
document.addEventListener('DOMContentLoaded', () => {
    const contactInfoDiv = document.querySelector('.contact-info');
    if (contactInfoDiv) {
        contactInfoDiv.addEventListener('click', showContactInfo);
    }
});