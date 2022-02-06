import User from '../../model/User';
import IDao from '../IDao';

export default interface IUserDao extends IDao {
  createUser(user: User): User;

  readUser(id: number): User;

  readAllUsers(): Promise<User[]>;

  updateUser(user: User): User;

  deleteUser(id: number): any;
}