const express = require("express");
const connectDB =require("./db/connect.js");
const dotenv = require("dotenv");
const userRoutes = require('./routes/userRoutes');







dotenv.config();
const app = express();


app.use('/user', userRoutes);





const PORT = process.env.PORT;
connectDB;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
