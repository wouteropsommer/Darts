const testFolder = './dataset5dartss1/noncropped/';
const sharp = require('sharp');
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {

            sharp('./dataset5dartss1/noncropped/' + file).extract({ width: 1520, height: 1520, left: 1452, top: 348 }).toFile("./dataset5dartss1/cropped/" + file)
                .then(function(new_file_info) {
                    console.log("Image cropped and saved");
                })
                .catch(function(err) {
                    console.log(file);
                    console.log(err);
                });

    });
});