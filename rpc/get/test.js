const get = require('./index')

describe('rpc/get', () => {
  it('should get an existing appliction', async () => {
    const secret = 's3cret'
    const appatar = 'https://somefakeimage.com/300/300/cat.jpg'
    const name = 'LaCroix as a Service'
    const domains = [
      'lcaas.com'
    ]
    const expectedResult = {
      secret,
      appatar,
      name,
      domains
    }
    const db = {
      findOne: jest.fn(() => Promise.resolve(expectedResult))
    }
    const result = await get({name}, {db})
    expect(db.findOne)
      .toBeCalledWith({
        name
      })
    expect(result)
      .toEqual(expectedResult)
  })
})
