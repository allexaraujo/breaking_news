const express = require('express');
const userRoute = require('./src/routes/user.route')
const app = express();

app.use("/sum", userRoute);

app.listen(3000);