const { connect, connection } = require('mongoose');

connect('mongodb://localhost/wikiDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
