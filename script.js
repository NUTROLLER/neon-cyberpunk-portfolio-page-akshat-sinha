//Card flipping functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

// mouse trails
// Neon mouse trails
const trailContainer = document.getElementById('trail-container');

document.addEventListener('mousemove', (e) => {
  const dot = document.createElement('div');
  dot.className = 'trail-dot';
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
  trailContainer.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 500);
});


//Matrix-esque rain effect
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letters = "アカサタナハマヤラワ0123456789".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = new Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ea00d9";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);


// Hamburger class toggle functionality
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

//Fake Submit
const submitBtn = document.querySelector(".glitch-button")
submitBtn.addEventListener('click', ()=>{
  alert("Your message has been sent!");
})