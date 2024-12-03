class Pacman {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 1;
    }
  
    update() {
      if (Math.random() > 0.5) this.x += this.speed;
      else this.y += this.speed;
    }
  
    render(ctx) {
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(this.x * 20, this.y * 20, 10, 0.2 * Math.PI, 1.8 * Math.PI);
      ctx.lineTo(this.x * 20, this.y * 20);
      ctx.fill();
    }
  }
  
  export default Pacman;
  