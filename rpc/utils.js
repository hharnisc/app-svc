const {createError} = require('@hharnisc/micro-rpc')

const validateString = ({
  value,
  name
}) => {
  if (!value) {
    throw createError({message: `Missing Input Parameter: ${name}`})
  }
  if (typeof value !== 'string') {
    throw createError({message: `Invalid Input: ${name}`})
  }
}

module.exports.validateAppitar = appatar =>
  validateString({
    value: appatar,
    name: 'appatar'
  })

module.exports.validateSecret = secret =>
  validateString({
    value: secret,
    name: 'secret'
  })

module.exports.validateName = name =>
  validateString({
    value: name,
    name: 'name'
  })
