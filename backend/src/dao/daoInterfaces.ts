import User from "../model/User";

export interface IDao{}

export interface IFTransactionDao extends IDao {}

export interface IUserDao extends IDao {
  createUser(user: User): Promise<User>;
  
  getAllUsers(): Promise<User[]>;

  getUser(id: number): Promise<User>;

  updateUser(user: User): Promise<User>;

  deleteUser(user: User): any;
}