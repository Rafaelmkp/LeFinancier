import DaoConstants from "./DaoConstants";

export default abstract class UserConstants {
  static readonly USER_FILE_PATH = DaoConstants.FILE_LOCATION;
  static readonly USER_FILE_NAME = 'users.json';
}