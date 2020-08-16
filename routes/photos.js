const express = require('express');
const router = express.Router({ mergeParams: true });
const upload = require('../server');
const authMiddleware = require('../middleware/authMiddleware');

const fs = require('fs');

router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
  console.log(req.file);

  res.end('File is uploaded');
});

router.get('/getfs', (req, res) => {
  const data = fs.readdirSync('./client/public/uploads');
  res.status(200).json({
    success: true,
    data: data,
  });
});

router.delete('/:id', authMiddleware, (req, res) => {
  fs.unlinkSync('./client/public/uploads/' + req.params.id, (err) => {
    if (err) {
      console.log('failed to delete local image:' + err);
    } else {
      console.log('successfully deleted local image');
    }
  });
});

module.exports = router;
