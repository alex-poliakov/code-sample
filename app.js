const express = require('express');
const bodyParser = require('body-parser');

const router = require('./src/routes');
const { clientDir } = require('./src/config');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(clientDir));
app.use('/', router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))