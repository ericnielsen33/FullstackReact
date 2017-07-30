if (process.env.NODE_ENV === 'production') {
  // state is in production - return prod keys
  module.exports = require('./prod.js');
} else {
  // state is in dev - return dev keys
  module.exports = require('./dev.js');
}
