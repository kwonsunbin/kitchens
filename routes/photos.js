const express = require('express');
const router = express.Router({ mergeParams: true });
const Photo = require('../models/Photo');
const authMiddleware = require('../middleware/authMiddleware');
const { getPhotos, deletePhoto, getPhoto } = require('../controllers/photos');
const upload = require('../server');
const path = require('path');
const fs = require('fs');
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(advancedResults(Photo), getPhotos)
  .post(authMiddleware, upload.array('files'), (req, res, next) => {
    const paths = req.files.map((f) => {
      return f.filename;
    });
    var obj = {
      title: req.body.title,
      desc: req.body.desc,
      kind: req.body.kind,
      img: {
        /* data: fs.readFileSync(
          path.join(
            __dirname + '/../client/public/uploads/' + req.file.filename
          )
        ), */
        contentType: 'image/png',
      },
      path: paths,
    };
    Photo.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        // item.save();
        res.redirect('/');
      }
    });
  });

router.route('/:id').delete(authMiddleware, deletePhoto).get(getPhoto);

module.exports = router;
