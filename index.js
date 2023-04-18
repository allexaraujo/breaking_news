import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';

const app = express();

const PORT = 3000;
connectDatabase();
app.use(express.json())
app.use("/user", userRoute);
app.use("/user/:id", userRoute)

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));