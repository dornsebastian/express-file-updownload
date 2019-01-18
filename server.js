const express = require('express');
const upload = require('./upload');
const download = require('./download');
const cors = require('cors');

const server = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);
server.get('/download', download);

server.listen(8000, () => {
    console.log('Server started!');
});
