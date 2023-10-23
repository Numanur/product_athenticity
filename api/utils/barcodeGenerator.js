const JsBarcode = require('jsbarcode');
const { createCanvas } = require("canvas");

const barcodeGenerator = (barcodeId) => {
    const canvas = createCanvas();

    JsBarcode(canvas, barcodeId, {
        format: 'CODE128',
        displayValue: true,
        fontSize: 16,
    });

    const barcodeImageBuffer = canvas.toBuffer();
    return barcodeImageBuffer.toString('base64');

    // res.type('image/png');
    // res.send(barcodeImageBuffer);
};

module.exports = { barcodeGenerator };
