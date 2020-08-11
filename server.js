const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const multer = require('multer');

const connectDB = require('./config/db');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// ConnectDB to Database
connectDB();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, 'imgfile' + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

module.exports = upload;
// Route files
const requests = require('./routes/requests');
const users = require('./routes/users');
const notices = require('./routes/notices');
const photos = require('./routes/photos');

const app = express();

// Body Parser
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/requests', requests);
app.use('/api/v1/users', users);
app.use('/api/v1/notices', notices);
app.use('/api/v1/photos', photos);

app.use(errorHandler);
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  //Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});
