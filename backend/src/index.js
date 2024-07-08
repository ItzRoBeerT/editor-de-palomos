const express = require('express');
const cors = require('cors');
require('./db/mongoose');

//settings
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
