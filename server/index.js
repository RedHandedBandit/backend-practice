const express = require('express');
const bodyParser = require('body-parser');

const ctrl = require('./controller');

const app = express();
app.use(bodyParser.json());

app.get('/api/clientList', ctrl.getClientList)

app.listen(4000, () => {
  console.log('listening on local host 4000');
})