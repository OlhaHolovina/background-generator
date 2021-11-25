const getRandomColorChannel = function(options = 256) {
  return Math.floor(Math.random() * options)
}

function setNewColour() {
  const newColor = `rgba(${getRandomColorChannel()}, ${getRandomColorChannel()}, ${getRandomColorChannel()}, 0.5)`;
  document.body.style.backgroundColor = newColor;
  document.getElementById('output').textContent = newColor;
}

document.getElementById('generate').addEventListener('click', setNewColour);
window.addEventListener('load', setNewColour);