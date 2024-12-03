import Game from './Game.js';
import { loadAssets } from './helpers.js';

const GameManager = {
  game: null,
  assets: null,

  async initialize() {
    this.assets = await loadAssets();
    const level = parseInt(sessionStorage.getItem('level') || '1');
    this.game = new Game(level, this.assets);
  },

  update() {
    this.game.update();
  },

  render() {
    this.game.render();
  }
};

export default GameManager;
