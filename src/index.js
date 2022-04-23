const express = require('express');
// import morgan
const morgan = require('morgan');

const handlebars = require('express-handlebars');

const path = require('path');
const { resolveSoa } = require('dns');
const app = express();
const port = 3000;
const route = require('./routes');
// const route = require('./routes');
const db = require('./config/db');
app.use(express.static(path.join(__dirname, 'public')));
// const db = require('./config/db');
// db.connect();
// HTTP logger
app.use(morgan('combined'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log(path.join(__dirname,"resources/views"))

//Route init
// route(app);

db.connect();
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// app.get('/', (req, res) => {
//   res.render('home');
// });
