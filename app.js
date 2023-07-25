const express = require('express')
const app = express()
const port = 3200
const bodyParser = require("body-parser");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './upload'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api/upload', (req, res) => {
  res.json({
      'message': 'hello'
  });
});

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:4200',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
        'message': 'File uploaded succesfully.'
    });
    console.log("file caricato correttamente");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
