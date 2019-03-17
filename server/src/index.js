import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import db from './models/index';
import routes from './routes/index';


const app = express();

app.use(express.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the NotePads API');
});

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listen on ${port}`);
  db.sequelize.sync();
});


export default app;
