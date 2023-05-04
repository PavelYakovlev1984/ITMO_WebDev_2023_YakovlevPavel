import { Earth, Planet, Position } from './src/solor-system.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerPosition = new Position(canvas.width / 2, canvas.height / 2);

class RenderObject {
  render(ctx, planet) {
    ctx.beginPath();
    ctx.fillStyle = planet.atmosphere;
    ctx.arc(planet.position.x, planet.position.y, planet.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
const sun = new Planet(centerPosition, 0, 30, 'red', 100, new RenderObject());

const earth = new Earth(sun.position);

const planets = [
  sun,
  earth,
  new Planet(centerPosition, 0.1, 60, 'gold', 150, new RenderObject()),
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
