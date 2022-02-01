import UserConstants from "./UserConstants";

import IUserDao from "./IUserDao";
import User from "../../model/User";

class UserFileDao extends IUserDao {
  constructor() {
    super();
    this.LOCATION = UserConstants.USER_FILE_PATH;
  }

  createUser(user) {
    console.log("UserDao - method not implemented yet!");
  }

  readUser(id) {
    console.log("UserDao - method not implemented yet!");
  }

  updateUser(user) {
    console.log("UserDao - method not implemented yet!");
  }

  deleteUser(id) {
    console.log("UserDao - method not implemented yet!");
  }
}