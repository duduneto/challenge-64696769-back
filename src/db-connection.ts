const { MongoMemoryReplSet } = require('mongodb-memory-server');
import mongoose from 'mongoose'
module.exports = async () => {
  const replSet = new MongoMemoryReplSet({
    debug: false,
    replSet: { storageEngine: 'wiredTiger' },
  });
  
  await replSet.waitUntilRunning();
  const uri = await replSet.getUri();
  
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}