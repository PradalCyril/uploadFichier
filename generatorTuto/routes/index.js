const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', 
limits:{
fileSize : 3 * 1024 *1024,
}
});
const fs = require('fs');

router.post('/monupload', upload.array('monfichier',3), function (req, res, next) {
  for(let i=0;i<3;i++){
  fs.rename(req.files[i].path, 'public/images/' + req.files[i].originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
}res.end()})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresssss' });
});

module.exports = router;
