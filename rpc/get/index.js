module.exports = async ({
  name
}, {
  db
}) => {
  const result = await db.findOne({
    name
  })
  return result
}
