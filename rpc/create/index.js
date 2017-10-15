const {createError} = require('@hharnisc/micro-rpc')

module.exports = async ({
  secret,
  appatar,
  name,
  domains
}, {
  db
}) => {
  if (!secret) {
    throw createError({message: 'Missing Input Parameter: secret'})
  }
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
