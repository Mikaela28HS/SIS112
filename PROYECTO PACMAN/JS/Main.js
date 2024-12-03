import GameManager from './GameManager.js';

GameManager.initialize();

function gameLoop() {
  GameManager.update();
  GameManager.render();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
