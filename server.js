const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');


//require('dotenv').config()

const PORT = process.env.PORT || 3000;
const app = express();


app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/workout',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
);

const routes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use('/api', routes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});