const container = document.getElementById('container');

const colours = ['#fff3d4', '#f2e0ae', '#f0e9d5', '#fff7e0', '#fffdf7', '#fffdfa'];
const circles = 441

for(let i = 0; i < circles; i++) {
  const circle = document.createElement('div')
  circle.classList.add('circle')
  circle.addEventListener('mouseover', () =>  setColour(circle))
  circle.addEventListener('mouseout', () =>  removeColour(circle))
  container.appendChild(circle)
}

function setColour(ele) {
    const colour = getRandomColour()
    ele.style.backgroundColor = colour
    ele.style.boxShadow = `0 0 2px ${colour}, 0 0 20px ${colour}`
}

function removeColour(ele) {
    ele.style.backgroundColor = '#1f1f1f'
    ele.style.boxShadow = '0 0 2px rgb(82, 82, 82)'
}

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)]
}