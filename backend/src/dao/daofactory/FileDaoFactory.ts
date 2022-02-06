import IFTransaction from "../ftransaction/IFTransaction";
import IUserDao from "../user/IUserDao";
import UserFileDao from "../user/UserFileDao";
import IDaoFactory from "./IDaoFatory";

export default class FileDaoFactory implements IDaoFactory {
  private static _instance: FileDaoFactory;

  private constructor(){}

  static get Instance(): IDaoFactory {
    return this._instance || (this._instance = new this());
  }

  getUserDao(): IUserDao {
    return UserFileDao.Instance;
  }

  getFTransaction(): IFTransaction {
    throw new Error("Method not implemented.");
  }
}