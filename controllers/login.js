const secret = process.env.secret;
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  const secret = req.app.get('jwt-secret');

  const check = (user) => {
    if (!user) {
      throw new Error('login failed');
    } else {
      if (user.verify(password)) {
        const p = new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
            },
            secret,
            {
              expiresIn: '7d',
              issuer: 'sunbin',
              subject: 'userInfo',
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            }
          );
        });
        return p;
      } else {
        throw new Error('login failed');
      }
    }
  };

  const respond = (token) => {
    let options = {
      path: '/',
      sameSite: true,
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    };
    res.cookie('x-access-token', token, options);
    res.json({
      message: 'logged in successfully',
      token,
    });
  };

  const onError = (error) => {
    console.log(error.message);

    res.status(403).json({
      message: error.message,
    });
  };

  User.findOneByUsername(username).then(check).then(respond).catch(onError);
};

exports.checkLogin = (req, res, next) => {
  const token = req.cookies['x-access-token'];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in',
    });
  }

  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  };

  p.then((decoded) => {
    req.decoded = decoded;
    res.status(200).json({ success: true });
  }).catch(onError);
};
