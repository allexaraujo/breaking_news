const express = require('express');
const userRoute = require('./src/routes/user.route')
const app = express();
const connectDatabase = require('./src/database/db')

const PORT = 3000;
connectDatabase();
app.use(express.json())
app.use("/user", userRoute);
app.use("/user/:id", userRoute)

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));