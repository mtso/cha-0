const cha0 = require('../')
const expect = require('chai').expect

describe('CHA-0', function() {
  describe('return value', function() {
    it('is a string', function(done) {
      expect(cha0('abc')).to.be.a('string')
      done()
    })

    it('is a hex color', function(done) {
      expect(cha0('abc').length).to.eq(6)
      done()
    })
  })
})
