import IUserDao from "../dao/user/IUserDao";
import User from "../model/User";

export default class UserService {
  userDao: IUserDao;

  constructor (userDao: IUserDao) {
    this.userDao = userDao;
  }

  async readAllUsers(): Promise<User[]> {
    return this.userDao.readAllUsers();
  }
}