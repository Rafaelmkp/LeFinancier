import { IFTransactionDao, IUserDao } from "../daoInterfaces";

export default interface IDaoFactory {
  getUserDao(): IUserDao;
  
  getFTransaction(): IFTransactionDao;
}