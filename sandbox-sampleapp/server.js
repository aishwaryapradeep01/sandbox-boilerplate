var express = require('express');
var multer = require('multer')
var portfinder = require("portfinder");

var app = express();
portfinder.basePort = 3100;
portfinder.highestPort = 9999;

app.use(express.static('build'));

app.get('/', function (req, res) {
    res.json("Express is connected");
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'datafolder/uploadedfiles/')
    },
    filename: function (req, file, cb) {
        cb(null, "data.csv")
    }
})

// 15 MB file size restriction
var upload = multer({
    storage: storage,
    limits: { fileSize: 15000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "text/csv") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .csv allowed!'));
        }
    }
}).single('file');

app.post('/upload', function (req, res) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code === "LIMIT_FILE_SIZE") {
                console.log('File size greater than 15MB');
            }
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});


portfinder.getPort((err, port) => {
    if (err) throw err;
    app.listen(port, () =>
        console.log(`App listening on port: ${port}`)
    );
})