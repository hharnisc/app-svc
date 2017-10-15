module.exports = async ({
  secret,
  appatar,
  name,
  domains
}, {
  db
}) => {
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
