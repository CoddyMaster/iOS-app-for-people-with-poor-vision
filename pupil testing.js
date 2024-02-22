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
 transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx|svg)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}
