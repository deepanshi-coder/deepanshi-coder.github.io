// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Typewriter effect cycling through roles in the hero terminal
const roles = ['SDE Intern Aspirant', 'MERN Stack Developer', 'AI/ML Enthusiast', 'Problem Solver'];
const roleEl = document.getElementById('typed-role');

let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function tick() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(tick, 1400); // pause before deleting
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  }

  roleEl.textContent = roles[roleIndex].slice(0, charIndex);
  setTimeout(tick, deleting ? 40 : 70);
}

// Respect reduced motion preference: skip animation, show static text
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  charIndex = 0;
  roleEl.textContent = '';
  setTimeout(tick, 600);
}
