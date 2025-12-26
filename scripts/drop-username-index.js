const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/connect');
    console.log('Connected to MongoDB');

    const coll = mongoose.connection.collection('users');
    const indexes = await coll.indexes();
    console.log('Current indexes:', indexes.map(i => i.name));

    if (indexes.some(i => i.name === 'username_1')) {
      await coll.dropIndex('username_1');
      console.log('Dropped index username_1');
    } else {
      console.log('username_1 index not found');
    }
  } catch (err) {
    console.error('Error dropping index:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();
