const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
	res.status(200).send('You tried to login as ' + req.body.email);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});