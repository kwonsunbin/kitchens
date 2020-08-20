const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

//Load models
const Notice = require('./models/Notice');
const User = require('./models/User');
const Request = require('./models/Request');
const Photo = require('./models/Photo');

mongoose.connect(process.env.mongodbUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Detroy DB
const deleteData = async () => {
  try {
    await Notice.deleteMany();
    await User.deleteMany();
    await Request.deleteMany();
    await Photo.deleteMany();
    console.log(`Data Detroyed...`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
