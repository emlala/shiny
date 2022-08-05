const box = document.getElementById('box');

const colours = ['#fff3d4', '#f2e0ae', '#f0e9d5', '#fff7e0', '#fffdf7', '#fffdfa'];
const squares = 441

for(let i = 0; i < squares; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () =>  setColour(square))
  square.addEventListener('mouseout', () =>  removeColour(square))
  box.appendChild(square)
}

function setColour(ele) {
    const colour = getRandomColour()
    ele.style.backgroundColor = colour
    ele.style.boxShadow = `0 0 2px ${colour}, 0 0 20px ${colour}`
}

function removeColour(ele) {
    ele.style.backgroundColor = '#1f1f1f'
    ele.style.boxShadow = '0 0 2px #525252'
}

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)]
}