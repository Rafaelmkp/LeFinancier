import express, { NextFunction, Request, Response } from 'express';
import UserFileDao from '../../dao/user/UserFileDao';


const router = express.Router();

router.post('/new-user', async (req, res, next) => {
  //do persist new user
});


router.get('/users', async (req, res, next) => {
  const userDao = UserFileDao.Instance;
  try{
    
    res.status(200).send();
  } catch (err) {
    console.log(err);
    next(new Error('not possible to retrieve users'));
  }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({error: err.message});
})

export default router;