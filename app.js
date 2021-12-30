const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//Static Files
app.use(express.static('publc'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

// Template Engine

app.set('views', './src/views')
app.set('view engine', 'ejs')

// Routes
const newsRoutes = require('./src/routes/main')
app.use('/', newsRoutes)

app.listen(port, () => console.log(`Listing in Port 1 ${port}`))