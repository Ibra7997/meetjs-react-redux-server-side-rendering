if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV_SERVER) {
  module.exports = require('./configureStore.prod'); // eslint-disable-line global-require
} else {
  module.exports = require('./configureStore.dev'); // eslint-disable-line global-require
}
