const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://kwon123:ksb10203@ksb.z68nk.mongodb.net/ksb?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports = connectDB;
