import User from '../../model/User';

export default interface IUserDao {
  createUser(user: User): User;

  readUser(id: number): User;

  readAllUsers(): User[];

  updateUser(user: User): User;

  deleteUser(id: number): any;
}