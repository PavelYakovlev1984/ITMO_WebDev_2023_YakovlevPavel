import { Planet, Position } from './src/solor-system.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerPosition = new Position(canvas.width / 2, canvas.height / 2);

const planets = [
  new Planet(centerPosition, 1.5, 30, 'red', 100),
  new Planet(centerPosition, 0.5, 40, 'blue', 150),
  new Planet(centerPosition, 0.2, 50, 'green', 200),
  new Planet(centerPosition, 0.1, 60, 'gold', 150),
];

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
