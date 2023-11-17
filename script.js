// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust as needed for header height
                behavior: 'smooth',
            });
        }
    });
});

// Intersection Observer setup
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.id;

        if (entry.isIntersecting) {
            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        } else {
            document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});