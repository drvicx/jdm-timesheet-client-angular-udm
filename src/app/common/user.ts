export class User {

  //--props declaration
  userId: number;
  personalNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  positionEng: string;
  positionRus: string;
  accessLevel: string;
  hireDate: Date;
  fireDate: Date;

  //--initialize props in constructor
  constructor(userId: number,
              personalNumber: number,
              firstName: string,
              lastName: string,
              middleName: string,
              login: string,
              positionEng: string,
              positionRus: string,
              accessLevel: string,
              hireDate: Date,
              fireDate: Date) {

    //-set Object props
    this.userId = userId;
    this.personalNumber = personalNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.login = login;
    this.positionEng = positionEng;
    this.positionRus = positionRus;
    this.accessLevel = accessLevel;
    this.hireDate = hireDate;
    this.fireDate = fireDate;
  }

}
