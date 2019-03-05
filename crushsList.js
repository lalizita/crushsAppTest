const list = [
  'Carlos Daniel',
  'José João',
  'Daniela Carla',
  'Angelo Magno'
]

const sumCrushs = (num1, num2) => num1 + num2

const findCrush = name => {
  try{
    validateSearch(name)
    const crushsFound = list.find((crush) => crush === name)
    return crushsFound ? crushsFound : 'Não existe este crush na sua lista'
  }
  catch(error){
    return error
  }
}

const countCrushs = () => list.length

const newFunction = num => num

// private 

const validateSearch = text => {
  if(!text) throw 'O valor de busca está vazio'
  if(typeof text !== 'string') throw 'O tipo do texto é invalido'
}

module.exports = {
  sumCrushs,
  findCrush,
  countCrushs
}