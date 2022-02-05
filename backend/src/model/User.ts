export default class User {
  id?: number;
  name: String;
  email: String;
  phone: String;

  constructor(name: String, email: String, phone: String, id?: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}