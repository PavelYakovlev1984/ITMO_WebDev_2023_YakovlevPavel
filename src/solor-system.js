import { PlanetRender } from './planetRender.js';

class Planet {
  x;
  y;
  position;
  radius;
  size;
  atmosphere;

  planetRender;
  speed;
  constructor(
    center,
    speed = 0.1,
    size = 10,
    atmosphere,
    radius,
    planetRender
  ) {
    this.center = center;
    this.radius = radius;
    this.speed = speed;
    this.alpha = 0;
    this.isMoving = speed !== 0;
    this.position = new Position(center.x, center.y);
    this.planetRender = planetRender;
  }
  render(ctx) {
    if (this.planetRender) {
      this.planetRender.render(ctx, this.position);
    } else {
      // ctx.beginPath();
      // ctx.fillStyle = this.atmosphere;
      // ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
      // ctx.fill();
      // ctx.closePath();
    }
  }

  move() {
    if (this.isMoving) {
      this.position.x = this.radius * Math.sin(this.alpha) + this.center.x;
      this.position.y = this.radius * Math.cos(this.alpha) + this.center.y;
      this.alpha += (this.speed * Math.PI) / 180;
    }
  }
}

class Position {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Earth extends Planet {
  constructor(center) {
    super(center, 2.2, 30, 'blue', 100, new PlanetRender(30, 'blue'));
    this.moon = new Planet(
      this.position,
      2.3,
      10,
      '#333',
      50,
      new PlanetRender(10, '#333')
    );
  }

  move() {
    super.move();
    this.moon.move();
  }
  render(ctx) {
    super.render(ctx);
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(this.position.x + 10, this.position.y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    this.moon.render(ctx);
  }
}

export { Planet, Position, Earth };
