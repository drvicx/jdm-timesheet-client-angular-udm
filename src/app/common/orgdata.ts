export class Orgdata {

  //--props declaration
  recordId: number;
  orgName: string;
  depName: string;
  okud: number;
  okpo: number;
  depBoss: string;
  responder: string;
  logo1: string;
  logo2: string;
  dateBegin: Date;
  dateEnd: Date;

  //--initialize props in constructor
  constructor(recordId: number,
              orgName: string,
              depName: string,
              okud: number,
              okpo: number,
              depBoss: string,
              responder: string,
              logo1: string,
              logo2: string,
              dateBegin: Date,
              dateEnd: Date) {

    //-set Object props
    this.recordId = recordId;
    this.orgName = orgName;
    this.depName = depName;
    this.okud = okud;
    this.okpo = okpo;
    this.depBoss = depBoss;
    this.responder = responder;
    this.logo1 = logo1;
    this.logo2 = logo2;
    this.dateBegin = dateBegin;
    this.dateEnd = dateEnd;
  }

}
