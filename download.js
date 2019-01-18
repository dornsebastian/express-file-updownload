module.exports = function download(req, res) {
    var file = __dirname + '/downloads/sample.jpg';
    res.download(file);
};
