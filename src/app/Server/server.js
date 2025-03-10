const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('./config/cors');
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes');
const connectDB = require('../lib/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors);
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('<h1>This is the home page</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});