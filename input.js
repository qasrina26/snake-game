Let inputDirection = { x: 0, y: 0 }
Let lastInputDirection - { x: 0, y: 0 }

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'AroowUp':
      if (lastInputDirection.y !== 0) break
      inoutDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x; 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInoutDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection .x !== 0) break
      inputDirection = { x: 1, y: 0 } 
      break
  }
})

export function getInputDirection() {
  lastInoutDirection = InputDirection
  return inputDirection
}
