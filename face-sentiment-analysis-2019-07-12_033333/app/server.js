// server.js
// where your node app starts

// init project
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();


app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const bucketName = 'Bucket where the file resides, e.g. my-bucket';
// const fileName = 'Path to file within bucket, e.g. path/to/image.png';

// Performs face detection on the gcs file

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});









app.post('/1', async function(request, response) {
    
    

    var imagebase64 = request.body.imagebase64;
    
    const request1 = {
        image: {
            content: imagebase64
        }
    };

    await client.faceDetection(request1)
        .then(response1 => {
            console.log(response1);
            response.send(response1);
        })
        .catch(err => {
            console.error(err);
            response.send(err);
        });




});




// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});