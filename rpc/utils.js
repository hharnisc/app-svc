const {createError} = require('@hharnisc/micro-rpc')

module.exports.validateAppitar = appatar => {
  if (!appatar) {
    throw createError({message: 'Missing Input Parameter: appatar'})
  }
  if (typeof appatar !== 'string') {
    throw createError({message: 'Invalid Input: appatar'})
  }
}
