import IFTransaction from "../ftransaction/IFTransaction";
import IUserDao from "../user/IUserDao";

export default interface IDaoFactory {
  getUserDao(): IUserDao;
  
  getFTransaction(): IFTransaction;
}