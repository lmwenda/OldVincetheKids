const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Initializations
const app = express();
const PORT = 5000;

dotenv.config();

// Database Setup
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },  () => { 
    console.log("Connected to Database...");
});

// Components
const UserRoutes = require('./Routes/UserRoutes');

// Middlewares 
app.use(cors());
app.use(express.json());

// Route Middlewares
app.use('/api/user', UserRoutes);

// Listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});

module.exports = { PORT }