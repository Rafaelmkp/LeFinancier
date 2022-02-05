import express from "express";
import userRoutes from './routes/user/userRoutes';

const app = express();
app.use(express.json());
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Backend started');
});