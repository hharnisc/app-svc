const {
  validateAppatar,
  validateSecret,
  validateName,
  validateDomains,
  validateCreate
} = require('./utils')

describe('rpc/utils', () => {
  describe('validateAppatar', () => {
    it('should throw an error if missing appatar', () => {
      try {
        validateAppatar()
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
        validateAppatar(1234)
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: appatar')
        expect(err.handled)
          .toBe(true)
      }
    })
  })

  describe('validateSecret', () => {
    it('should throw an error if missing secret', () => {
      try {
        validateSecret()
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Missing Input Parameter: secret')
        expect(err.handled)
          .toBe(true)
      }
    })
    it('should throw an error if secret is not a string', () => {
      try {
        validateSecret(1234)
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: secret')
        expect(err.handled)
          .toBe(true)
      }
    })
  })

  describe('validateName', () => {
    it('should throw an error if missing name', () => {
      try {
        validateName()
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Missing Input Parameter: name')
        expect(err.handled)
          .toBe(true)
      }
    })
    it('should throw an error if name is not a string', () => {
      try {
        validateName(1234)
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: name')
        expect(err.handled)
          .toBe(true)
      }
    })
  })

  describe('validateDomains', () => {
    it('should throw an error if missing domains', () => {
      try {
        validateDomains()
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Missing Input Parameter: domains')
        expect(err.handled)
          .toBe(true)
      }
    })

    it('should throw an error if domains is not an array', () => {
      try {
        validateDomains({})
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: domains')
        expect(err.handled)
          .toBe(true)
      }
    })

    it('should throw an error if domains empty', () => {
      try {
        validateDomains([])
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: domains')
        expect(err.handled)
          .toBe(true)
      }
    })

    it('should throw an error if a domain is not a string', () => {
      try {
        validateDomains(['test', {}])
        throw new Error('this should throw')
      } catch (err) {
        expect(err.message)
          .toBe('Invalid Input: domains')
        expect(err.handled)
          .toBe(true)
      }
    })
    it('should validate a domain', () => {
      validateDomains(['test', 'test2'])
      validateDomains(['test'])
    })
  })

  describe('validateCreate', () => {
    it('should validate a create input', () => {
      validateCreate({
        secret: 's3cret',
        appatar: 'http://someurl.com/image.jpg',
        name: 'LaCroix as a Service',
        domains: ['lcaas.com']
      })
    })
  })
})
