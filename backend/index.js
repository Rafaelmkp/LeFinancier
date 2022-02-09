import express from 'express';
import userRouter from './routes/user/user-routes.js';

const app = express();
app.use(express.json());
app.use('./user', userRouter);

app.listen(3000, () => {
  console.log('Backend started');
});