const {
  validateAppitar
} = require('./utils')

describe('rpc/utils', () => {
  describe('validateAppitar', () => {
    it('should throw an error if missing appatar', () => {
      try {
        validateAppitar()
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Missing Input Parameter: appatar')
        expect(err.handled)
          .toBe(true)
      }
    })
    it('should throw an error if appatar is not a string', () => {
      try {
        validateAppitar(1234)
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: appatar')
        expect(err.handled)
          .toBe(true)
      }
    })
  })
})
