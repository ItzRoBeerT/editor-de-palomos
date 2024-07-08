const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const userRouter = require('./routers/User');
const pigeonRouter = require('./routers/Pigeon');

//settings
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(pigeonRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
