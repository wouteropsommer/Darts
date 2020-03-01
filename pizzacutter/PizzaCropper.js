const sharp = require('sharp');
const targetFolder = '../cropper/dataset5dartss1/cropped/';
const endFolder = './dataset5dartss1/pizza/'
const fs = require('fs');

const width = 400,
    r = width / 2
//DOOR ALLE INPUT AFBEELDINGEN LOPEN
fs.readdir(targetFolder, (err, files) => {
    files.forEach(file => {
        //20 KEER DRAAIEN VOOR ALLE VAKKEN
        for (var teller = 0; teller < 20; teller++) {

            //PIZZA VORM MAKEN
            circleShape = Buffer.from(`<svg width="1520" height="1520" >
            <g transform="translate(760,760) rotate(${-1 + (18 * teller)})" stroke="#000" stroke-width="2">
            <path d="M0 1-101-575A60 7 0 0 1 101-575Z" fill="#080"/>
            </g>
            </svg>`);

            //VORM UITSNIJDEN
            var img = sharp(targetFolder + file).extract({width: 1520, height: 1520, left: 0, top: 0})
                .composite([{
                    input: circleShape,
                    blend: 'dest-in'
                }])
                .webp()
                .toFile(endFolder + file.slice(0, -4) + 'output ' + teller + '.png', (err, info) => err ?
                    console.error(err.message) :
                    console.log(info)
                );

        }


    });
});








/*
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
});*/
