const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const route = require('./routes');
const app = express();
const port = 5000;



app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
  res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');

	if (res.method == 'OPTIONS') {
		res.send(200);
	} else next();
})


app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// http log
app.use(morgan('combined'))
// Template engine
app.engine('.hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// console.log('PATH',__dirname)

route(app)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})