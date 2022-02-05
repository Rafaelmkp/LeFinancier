import Big from "big.js";

export default class FTransaction {
  id?: number;
  userId: number;
  value: Big;
  type: string;
  date: Date;
  title: string;
  description: string;

  constructor(userId: number, value: Big, type: string, date: Date, title: string, description: string) {
    this.userId = userId;
    this.value = value;
    this.type = type;
    this.date = date;
    this.title = title;
    this.description = description;
  }
}