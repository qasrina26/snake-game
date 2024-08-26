import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

Let lastRenderTime = 0
Let gameOver = false
const gameBoard = document .getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (comfirm('You lost. Press ok to restart.')) {
      window.location ='/'
    }
  return
  }


 window.requestAnimationFrame(main)
  const secondsSinceLastReader = (currentTime - lastReaderTime) / 1000
  if (secondSinceLastReader < 1 / SNAKE_SPEED) return


lastReaderTime = currentTime

uodate()
draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
