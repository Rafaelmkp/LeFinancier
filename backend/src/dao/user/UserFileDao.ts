import { promises as fsPromises } from 'fs';
import { existsSync } from 'fs';

import User from "../../model/User";
import { FileDao } from '../typePool';
import IUserDao from "./IUserDao";
import UserConstants from './UserConstants';

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

  createUser(user: User): User {
    throw new Error("Method not implemented.");
  }

  readUser(id: number): User {
    throw new Error("Method not implemented.");
  }

  async readAllUsers(): Promise<User[]> {
    const data = JSON.parse((await readFile(UserFileDao.USER_FILE_FULL_NAME)).toString());
    return data.users;
  }

  updateUser(user: User): User {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: number) {
    throw new Error("Method not implemented.");
  }
}