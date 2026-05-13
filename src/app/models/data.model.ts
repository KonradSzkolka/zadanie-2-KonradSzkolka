export class Data {
  id: number;
  value: number;
  date: Date;
  name: string;
  description: string;

  constructor(
    id: number,
    value: number,
    date: Date,
    name: string,
    description: string
  ) {
    this.id = id;
    this.value = value;
    this.date = date;
    this.name = name;
    this.description = description;
  }
}