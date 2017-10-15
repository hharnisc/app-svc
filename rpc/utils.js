const {createError} = require('@hharnisc/micro-rpc')

const throwMissing = ({name}) => {
  throw createError({message: `Missing Input Parameter: ${name}`})
}

const throwInvalid = ({name}) => {
  throw createError({message: `Invalid Input: ${name}`})
}

const validateString = ({
  value,
  name
}) => {
  if (!value) {
    throwMissing({name})
  }
  if (typeof value !== 'string') {
    throwInvalid({name})
  }
}

module.exports.validateAppatar = appatar =>
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

module.exports.validateDomains = domains => {
  if (!domains) {
    throwMissing({name: 'domains'})
  }
  if (!Array.isArray(domains)) {
    throwInvalid({name: 'domains'})
  }
  if (domains.length < 1) {
    throwInvalid({name: 'domains'})
  }
  domains.forEach(domain => {
    if (typeof domain !== 'string') {
      throwInvalid({name: 'domains'})
    }
  })
}

module.exports.validateCreate = ({
  secret,
  appatar,
  name,
  domains
}) => {
  module.exports.validateSecret(secret)
  module.exports.validateAppatar(appatar)
  module.exports.validateName(name)
  module.exports.validateDomains(domains)
}
