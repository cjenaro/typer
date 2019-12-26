const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

function getRandomBetween(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min) + min)
}

async function type(element) {
  const text = element.textContent
  let soFar = ''
  for (const letter of text) {
    soFar += letter
    element.textContent = soFar
    await wait(getRandomBetween(element.dataset.typeMin, element.dataset.typeMax))
  }
}

document.querySelectorAll('[data-type]').forEach(type)