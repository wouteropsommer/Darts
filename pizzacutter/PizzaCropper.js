const sharp = require('sharp');
const width = 400,
    r = width / 2
//DOOR ALLE INPUT AFBEELDINGEN LOPEN
process.argv.forEach(function (value, index, array) {
    if (index > 1) {
        //20 KEER DRAAIEN VOOR ALLE VAKKEN
        for (var teller = 0; teller < 20; teller++) {

            circleShape = Buffer.from(`<svg width="1520" height="1520" >
            <g transform="translate(760,760) rotate(${-1 + (18 * teller)})" stroke="#000" stroke-width="2">
            <path d="M0 1-101-575A60 7 0 0 1 101-575Z" fill="#080"/>
            </g>
            </svg>`);
            var img = sharp(value).extract({width: 1520, height: 1520, left: 0, top: 0})
                .composite([{
                    input: circleShape,
                    blend: 'dest-in'
                }])
                .webp()
                .toFile(value.slice(0,-4) + 'output ' + teller + '.png', (err, info) => err ?
                    console.error(err.message) :
                    console.log(info)
                )
            console.log(teller * 18);

        }


    }

});
