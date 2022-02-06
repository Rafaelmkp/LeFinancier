import { IUserDao } from "../dao/daoInterfaces";
import User from "../model/User";

export default class UserService {
  userDao: IUserDao;

  constructor (userDao: IUserDao) {
    this.userDao = userDao;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userDao.getAllUsers();
  }
}