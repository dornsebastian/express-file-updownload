const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
    var form = new IncomingForm();

    form.on('file', (field, file) => {
        fs.renameSync(file.path, 'uploads/' + file.name);
    });
    form.on('end', () => {
        res.json();
    });
    form.parse(req);
};
