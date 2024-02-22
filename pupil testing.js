const example = require('../lib/example')

describe('Sync', function () {
  it('is true', function () {
    expect(example.sync(true)).to.be.true
  })
})

//pupil testing
describe('Async', function () {
  it('is true', function (done) {
    example.async(true, function (error, value) {
      if (error || value !== true) {
        error = error || new Error(`value is ${value}`)
      }

      done(error)
    })
  })
})
