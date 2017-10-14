'use strict';
module.exports = {
  url: process.env.MONGO_URL || 'mongodb://localhost/dailyjobsV2',
  useMongoClient: true,
  server:
      {auto_reconnect: true}
};
