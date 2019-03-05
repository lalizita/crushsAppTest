const should = require('should')
const crushsList = require('../crushsList')

describe('Crushs list test', () => {
  it('shohuld sum 2 and 3 and return 5', () => {
    crushsList.sumCrushs(2,3).should.be.equal(5)
  })
  it('Should sum 10 + 10 and return 20', () => {
    crushsList.sumCrushs(10,10).should.be.equal(20)
  })
  it('Should return a not found message', () => {
    crushsList.findCrush('Joselito').should.be.equal('Não existe este crush na sua lista')
  })
  it('Should return a crush', () => {
    crushsList.findCrush('Carlos Daniel').should.be.equal('Carlos Daniel').and.be.a.String();
  })
  it('Should not find a crush with invalid value', () => {
    crushsList.findCrush(15646).should.be.equal('O tipo do texto é invalido')
  })
  it('Should not find a crush with empty value', () => {
    crushsList.findCrush().should.be.equal('O valor de busca está vazio')
  })
  it('Should return the crushs list length', () => {
    const crushsLength = crushsList.countCrushs()
    crushsLength.should.be.equal(4)
    crushsLength.should.be.exactly(4).and.be.a.Number();
  })
})