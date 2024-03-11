// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact section
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple email validation
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Process the form data (you can send it to a server or perform other actions)
    const messageInput = document.getElementById('message');
    const messageValue = messageInput.value.trim();

    // Add your logic for handling the form data here

    alert('Form submitted successfully!');
    this.reset();
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
