export class Timedata {

  //--props declaration
  id: number;
  userId: number;
  hour: number;
  type: string;
  date: Date;

  //--initialize props in constructor
  constructor(id: number,
              userId: number,
              hour: number,
              type: string,
              date: Date) {

    //-set Object props
    this.id = id;
    this.userId = userId;
    this.hour = hour;
    this.type = type;
    this.date = date;
  }

}
