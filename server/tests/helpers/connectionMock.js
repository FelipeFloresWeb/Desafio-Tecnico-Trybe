const { Mongoose } = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DBServer = new MongoMemoryServer();
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const getConnection = async () => {
  const URLMock = await DBServer.getUri();
  return Mongoose.connect(URLMock, OPTIONS);
}

module.exports = { getConnection }; 