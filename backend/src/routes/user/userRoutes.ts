import express, { NextFunction, Request, Response } from 'express';
import DaoTypeMapper from '../../dao/DaoTypeMapper';
import UserService from '../../service/UserService';

const userDao = DaoTypeMapper.CONNECTION_MAP.get("FILE")!!.getUserDao();
const userSerive = new UserService(userDao);

const router = express.Router();

router.post('/new-user', async (req, res, next) => {
  try{ 
    const user = req.body;
    const userCreated = await userSerive.createUser(user);
    res.status(200).send(userCreated);
  } catch(err) {
    next(new Error('not possible to create the user'));
  }
});


router.get('/users', async (req, res, next) => {
  try{
    const users = await userSerive.getAllUsers();
    res.status(200).send(users);
  } catch(err) {
    console.log(err);
    next(new Error('not possible to retrieve users'));
  }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({error: err.message});
})

export default router;