const create = require('./index')

describe('rpc/create', () => {
  it('should create a new application', async () => {
    const secret = 's3cret'
    const id = '1234'
    const appatar = 'https://somefakeimage.com/300/300/cat.jpg'
    const name = 'LaCroix as a Service'
    const domains = [
      'lcaas.com'
    ]
    const insertResult = {
      insertedId: id
    }
    const db = {
      insertOne: jest.fn(() => Promise.resolve(insertResult))
    }
    const result = await create({secret, appatar, name, domains}, {db})
    expect(db.insertOne)
      .toBeCalledWith({
        secret,
        appatar,
        name,
        domains
      })
    expect(result)
      .toEqual({
        id
      })
  })

  it('should throw an error if secret is missing', async () => {
    try {
      await create({}, {})
    } catch (err) {
      expect(err.message)
        .toBe('Missing Input Parameter: secret')
      expect(err.handled)
        .toBe(true)
    }
  })
})
