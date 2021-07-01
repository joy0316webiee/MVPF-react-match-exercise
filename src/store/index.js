const ENV = process.env.REACT_APP_ENV || 'local';

if (ENV === 'local') {
  module.exports = require('./store.local');
} else if (ENV === 'staging') {
  module.exports = require('./store.staging');
} else {
  module.exports = require('./store.prod');
}
