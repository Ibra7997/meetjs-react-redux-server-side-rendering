import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import posts from './routes/posts';
import frontend from './routes/frontend';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/', posts);
app.use('/', frontend);

// error handlers
app.use((err, req, res) => {
  res.status(err.status || 500);
  if (err.status === 500) {
    console.error(err); // eslint-disable-line no-console
    res.json({ error: 'Internal Server Error' });
  } else if (err.status === 404) {
    res.json({ error: 'Not found' });
  } else {
    res.json({ error: err.message });
  }
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_PORT.replace('tcp://', 'mongodb://') || 'mongodb://localhost/posts');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
db.once('open', () => {
  console.log('DB connected!'); // eslint-disable-line no-console
});

export default app;
