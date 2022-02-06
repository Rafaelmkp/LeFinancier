import express, { NextFunction, Request, Response } from 'express';
import UserFileDao from '../../dao/user/UserFileDao';
import UserService from '../../service/UserSerivce';

const userDao = UserFileDao.Instance;
const userSerive = new UserService(userDao);

const router = express.Router();

router.post('/new-user', async (req, res, next) => {
  //do persist new user
});


router.get('/users', async (req, res, next) => {
  const userDao = UserFileDao.Instance;
  try{
    const users = await userDao.readAllUsers();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    next(new Error('not possible to retrieve users'));
  }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({error: err.message});
})

export default router;