const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3005;
const app = express();
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//mongoose connection
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

//notification
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to Database'));

//routes
const eventRoutes = require('./routes/eventRoutes')
const userRoutes = require('./routes/userRoutes')
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));