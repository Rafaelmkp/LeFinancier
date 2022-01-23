export default class FTransaction {
  constructor({id, user, value, type, date, title, description}) {
    this.id = id;
    this.user = user;
    this.value = value;
    this.type = type;
    this.date = date;
    this.title = title;
    this.description = description;
  }
}