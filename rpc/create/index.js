const {validateCreate} = require('../utils')

module.exports = async ({
  secret,
  appatar,
  name,
  domains
}, {
  db
}) => {
  validateCreate({
    secret,
    appatar,
    name,
    domains
  })
  const result = await db.insertOne({
    secret,
    appatar,
    name,
    domains
  })
  return {
    id: result.insertedId
  }
}
