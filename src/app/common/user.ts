export class User {

  //--props declaration
  userId: number;
  personalNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: Date;
  login: string;
  positionEng: string;
  positionRus: string;
  phoneWork: string;
  phonePers: string;
  emailWork: string;
  emailPers: string;
  photoLink: string;
  socialLink1: string;
  socialLink2: string;
  socialLink3: string;
  accessLevel: string;
  hireDate: Date;
  fireDate: Date;

  //--initialize props in constructor
  constructor(userId: number,
              personalNumber: number,
              firstName: string,
              lastName: string,
              middleName: string,
              birthDate: Date,
              login: string,
              positionEng: string,
              positionRus: string,
              phoneWork: string,
              phonePers: string,
              emailWork: string,
              emailPers: string,
              photoLink: string,
              socialLink1: string,
              socialLink2: string,
              socialLink3: string,
              accessLevel: string,
              hireDate: Date,
              fireDate: Date) {

    //-set Object props
    this.userId = userId;
    this.personalNumber = personalNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.birthDate = birthDate;
    this.login = login;
    this.positionEng = positionEng;
    this.positionRus = positionRus;
    this.phoneWork = phoneWork;
    this.phonePers = phonePers;
    this.emailWork = emailWork;
    this.emailPers = emailPers;
    this.photoLink = photoLink;
    this.socialLink1 = socialLink1;
    this.socialLink2 = socialLink2;
    this.socialLink3 = socialLink3;
    this.accessLevel = accessLevel;
    this.hireDate = hireDate;
    this.fireDate = fireDate;
  }

}
