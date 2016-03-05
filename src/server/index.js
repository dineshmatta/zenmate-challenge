import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(express.static(__dirname + '/../../public'));
app.use(express.static(__dirname + '/../../app'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import servers from './routes/servers';
app.use('/servers', servers);

app.get('/hello', (req, res) => {
  res.send('Hello Earth!');
});

const server = app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
