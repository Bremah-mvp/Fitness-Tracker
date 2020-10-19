const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

require('dotenv').config()


const PORT = process.env.PORT || 3000;
const app = express();


app.use(logger('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Set up api routes
app.use('/api', routes);

// Set up html routes
app.use('/', htmlRoutes);

// connect to Mongo database with Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}
);

// Listener
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
