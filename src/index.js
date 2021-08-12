const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

const tutorialRoutes = require('../routes/tutorial.routes');

app.use('/api/tuto/tutoriales', tutorialRoutes)

app.listen(app.get('port'), () => {
    console.log('Aloha on port ', app.get('port'));
});