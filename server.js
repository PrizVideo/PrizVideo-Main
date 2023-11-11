const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file,originalname);
	},
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.single('videoFile'), (req, res) => {
	res.send('File uploaded successfully');
});