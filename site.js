// JavaScript for Site-189

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    const scps = document.querySelectorAll('.scp');
    scps.forEach(scp => {
        scp.addEventListener('click', () => {
            alert(`More information about ${scp.querySelector('h3').textContent} will be added soon.`);
        });
    });
});
