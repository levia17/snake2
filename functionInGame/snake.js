const canvas = document.querySelector(".container canvas");
const ctx = canvas.getContext("2d");
let serial = 1;
let direction = "right";
let count = 0;

const snake = {
  x: 10,
  y: 10,
  vx: 0.5,
  vy: 0,
  id: 0,
};

export let Character = [snake];

/********************************************************************************/

export function snakeChar() {
  count = 0;
  let headX = Character[0].x;
  let headY = Character[0].y;
  // Clear all canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Character.forEach((segment) => {
    ctx.beginPath();
    ctx.fillRect(segment.x, segment.y, 10, 10);
    ctx.closePath();
  });

  // Snake's position
  snake.x += snake.vx;
  snake.y += snake.vy;
  Character.forEach((segment) => {
    if(segment.id !== 0){
      segment.x = headX - segment.id*11;
      segment.y = headY;
    }
  })

// Create snake's body
  function createBody() {
    if (count == 1) {
      console.log(headX);
      console.log(headY);
      let bodySnake = {
        x: headX - serial*11,
        y: headY,
        id: serial,
      };
      Character.push(bodySnake);
      console.log(Character);
      serial++;
    }
  }
  document.querySelector("canvas").addEventListener("click", () => {
    count ++; 
    createBody();
  });
  
      

  window.requestAnimationFrame(snakeChar);
}


export function snakeDirec() {
  addEventListener("keydown", (a) => {
    if (a.key == "a") {
      console.log("a is pressed");
      snake.vx = -0.5;
      snake.vy = 0;
    }
    if (a.key == "w") {
      snake.vx = 0;
      snake.vy = -0.5;
    }
    if (a.key == "s") {
      snake.vx = 0;
      snake.vy = 0.5;
    }
    if (a.key == "d") {
      snake.vx = 0.5;
      snake.vy = 0;
    }
  });
}
