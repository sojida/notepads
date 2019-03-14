import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the NotePads API');
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listen on ${port}`);
});

export default app;
