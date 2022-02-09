import { promises as fsPromises } from 'fs';
import { existsSync } from 'fs';

import User from "../../model/User";
import { FileDao } from '../typePool';
import { IUserDao } from "../daoInterfaces";
import UserConstants from '../UserConstants';

const { readFile, writeFile } = fsPromises;

export default class UserFileDao extends FileDao implements IUserDao {
  static USER_FILE_FULL_NAME: string;
  static USER_DATA_TEMPLATE: string;
  private static _instance: UserFileDao;

  private constructor() {
    super();
    UserFileDao.USER_FILE_FULL_NAME = 
      UserConstants.USER_FILE_PATH + UserConstants.USER_FILE_NAME;
    UserFileDao.USER_DATA_TEMPLATE = '{"nextIndex": "0", "users": []}';
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  async initFile() {
    if(!existsSync(UserFileDao.USER_FILE_FULL_NAME)) {
      await writeFile(
        UserFileDao.USER_FILE_FULL_NAME, 
        JSON.stringify(buildDataTemplate(), null, 2)
      );
    }

    function buildDataTemplate() {
      return JSON.parse(UserFileDao.USER_DATA_TEMPLATE);
    }
  }

  async createUser(user: User): Promise<User> {
    if(!this.isValidEmail(user.email) ||!this.isValidPhone(user.phone)) {
      throw new Error("wrong information");
    }
    
    const data = JSON.parse(await readFile(UserFileDao.USER_FILE_FULL_NAME, 'utf-8'));
    data.nextIndex++;
    user.id = data.nextIndex;
    data.users.push(user);
    await writeFile(UserFileDao.USER_FILE_FULL_NAME, JSON.stringify(data));
    return user;
  }

  getUser(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async getAllUsers(): Promise<User[]> {
    const data = JSON.parse((await readFile(UserFileDao.USER_FILE_FULL_NAME)).toString());
    return data.users;
  }

  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  deleteUser(user: User): any {
    throw new Error("Method not implemented.");
  }

  private isValidEmail(email: string): boolean {
    return email.length > 1 
          && email.includes('@') 
          && email.includes('.com');
  }

  private isValidPhone(phone: string): boolean {
    return phone.length > 5 
          && hasNoCharacter(phone);

    function hasNoCharacter(phone: string) {
      return !/^[a-zA-Z]*$/.test(phone);
    }
  }
}