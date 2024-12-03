export function renderGame(game) {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Render Pacman
    const pacmanImg = new Image();
    pacmanImg.src = './assets/gifs/pacman_comiendo.gif';
    ctx.drawImage(pacmanImg, game.pacman.x * 20, game.pacman.y * 20, 20, 20);
  
    // Render Pellets
    game.pellets.forEach(pellet => {
      ctx.fillStyle = pellet.type === 'small' ? 'white' : 'yellow';
      ctx.beginPath();
      ctx.arc(pellet.x * 20 + 10, pellet.y * 20 + 10, pellet.type === 'small' ? 3 : 6, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
  