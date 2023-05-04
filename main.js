import { Earth, Planet, Position } from './src/solor-system.js';
import { PlanetRender } from './src/planetRender.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerPosition = new Position(canvas.width / 2, canvas.height / 2);
const sun = new Planet(
  centerPosition,
  0,
  30,
  'red',
  100,
  new PlanetRender(30, 'red')
);

const earth = new Earth(sun.position);

const planets = [
  sun,
  earth,
  new Planet(
    centerPosition,
    0.1,
    60,
    'gold',
    150,
    new PlanetRender(60, 'gold')
  ),
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
