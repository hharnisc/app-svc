const {
  validateAppitar
} = require('./utils')

describe('rpc/utils', () => {
  describe('validateAppitar', () => {
    it('should throw an error is missing appatar', () => {
      try {
        validateAppitar()
      } catch (err) {
        expect(err.message)
          .toBe('Missing Input Parameter: appatar')
        expect(err.handled)
          .toBe(true)
      }
    })
  })
})
