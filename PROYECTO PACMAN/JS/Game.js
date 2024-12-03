import Pacman from './pacman.js';
import Ghost from './fantasmas.js';

class Game {
  constructor(level, assets) {
    this.level = level;
    this.assets = assets;
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.score = 0;
    this.lives = 3;
    this.pacman = new Pacman(1, 1);
    this.ghosts = this.initializeGhosts(level);
    this.pellets = this.initializePellets();
  }

  initializeGhosts(level) {
    const speeds = [1, 1.5, 2];
    const speed = speeds[level - 1];
    return [
      new Ghost(5, 5, speed, this.assets.ghosts.red),
      new Ghost(6, 6, speed, this.assets.ghosts.blue),
    ];
  }

  initializePellets() {
    const pellets = [];
    for (let y = 1; y < 18; y++) {
      for (let x = 1; x < 28; x++) {
        if ((x + y) % 3 === 0) pellets.push({ x, y });
      }
    }
    return pellets;
  }

  update() {
    this.pacman.update();
    this.ghosts.forEach(ghost => ghost.update());
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw pellets
    this.pellets.forEach(pellet => {
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(pellet.x * 20, pellet.y * 20, 5, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Draw Pacman
    this.pacman.render(this.ctx);

    // Draw ghosts
    this.ghosts.forEach(ghost => ghost.render(this.ctx));
  }
}

export default Game;
