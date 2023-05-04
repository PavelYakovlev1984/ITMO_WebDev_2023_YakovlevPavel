const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Planet {
  x;
  y;
  pX;
  pY;
  radius;
  size;
  atmosphere;

  speed;
  constructor(x, y, speed = 0.1, size = 10, atmosphere, radius) {
    this.pX = x;
    this.pY = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.size = size;
    this.speed = speed;
    this.alpha = 0;
  }
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x = planet.radius * Math.sin(this.alpha) + this.pX;
    this.y = planet.radius * Math.cos(this.alpha) + this.pY;
    this.alpha += (SPEED_MULT * Math.PI) / 180;
  }
}

let SPEED_MULT = 0.2;

let alpha = 0;

class Position {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const planets = [
  new Planet(100, 150, 30, 0.1, 'red', 10),
  new Planet(200, 150, 10, 0.1, 'blue', 50),
  new Planet(200, 100, 20, 0.1, 'green', 100),
  new Planet(100, 200, 50, 0.1, 'gold', 150),
];

// move();
let planet;
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const planetIndex in planets) {
    planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);
