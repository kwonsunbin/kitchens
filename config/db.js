const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  const conn = await mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports = connectDB;
