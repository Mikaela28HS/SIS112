class Ghost {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.isVulnerable = false;
    }
  
    moveRandomly(maze) {
      const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
      const [dx, dy] = directions[Math.floor(Math.random() * directions.length)];
      const newX = this.x + dx;
      const newY = this.y + dy;
  
      if (!maze.isWall(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  
    reset() {
      this.x = 5;
      this.y = 5;
      this.isVulnerable = false;
    }
  }
  
  export default Ghost;
  