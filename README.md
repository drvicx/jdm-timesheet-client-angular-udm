# jdm-timesheet-client-angular-udm
Angular REST Client project - Transition project between JDM Timesheet 2.0 and Udemy Course projects <br>
*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.
<hr>
<br>


## =CHANGE LOG

02: 20211204_2040:
<pre>
- Implemented data request-output from the Timesheet service (Orgdata, User, Timedata List Components);
  ..Ладно, буду писать по Русски если вы ни..я не понимаете / Ok, I will write comments in Russian as you like..
- Реализовано отображение данных с REST-API сервиса бакенда Timesheet (Orgdata, User, Timedata);
</pre>

01: 20211203_1150:
<pre>
- Angular project created;
</pre>


## =INFO

- linked projects:<br>
  [jdm-timesheet-cloud](https://github.com/drvicx/jdm-timesheet-cloud) <br>
  [jdm-timesheet-client-angular](https://github.com/drvicx/jdm-timesheet-client-angular) <br>
  [udm-rest-angular](https://github.com/drvicx/udm-rest-angular) <br>

- environment:<br>
  Windows 10 + WSL2 <br>
  Docker Desktop v4.2.0 (Docker v20.10.10, Compose 1.29.2, Kubernetes 1.21.5) <br>
  IntelliJ IDEA 2020.3 <br>
  
- dependencies (frontend):<br>
  Node Version Manager (nvm) v1.1.8 <br>
  NodeJS (node) v14.18.1 <br>
  Node Package Manager (npm) v6.14.15 <br>
  TypeScript v4.2.4 <br>
  TypeScript Compiler (tsc) v4.4.4 <br>
  Angular CLI v12.2.11 <br>
  <br>

- frontend Angular web-app endpoint: <br>
  1.01 [Angular App (main view)](http://localhost:4200) <br>
  <br>

- backend REST-endpoints ("service-timesheet"): <br>
  1.01 - [Timesheet Service - Orgdata - getAll](http://localhost:8600/api/orgdatas) -- multiple records <br>
  1.02 - [Timesheet Service - Orgdata - getById](http://localhost:8600/api/orgdatas/1) -- single record <br>
  1.03 - [Timesheet Service - Orgdata - findByRecordId](http://localhost:8600/api/orgdatas/search/findByRecordId?id=1) -- single <br>

  2.01 - [Timesheet Service - User - getAll](http://localhost:8600/api/users) -- multiple <br>
  2.02 - [Timesheet Service - User - getById](http://localhost:8600/api/users/1) -- single <br>
  2.03 - [Timesheet Service - User - findById](http://localhost:8600/api/users/search/findByUserId?id=1) -- single <br>
  2.04 - [Timesheet Service - User - findByPersonalNumber](http://localhost:8600/api/users/search/findByPersonalNumber?num=562) -- single <br>

  3.01 - [Timesheet Service - Timedata - getAll](http://localhost:8600/api/timedatas) -- paged, 1st 20 records <br>
  3.02 - [Timesheet Service - Timedata - getAll](http://localhost:8600/api/timedatas?page=0&size=30) -- paged, 1st 30 <br>
  3.03 - [Timesheet Service - Timedata - getAll](http://localhost:8600/api/timedatas?page=1&size=30) -- paged, 2nd 30 <br>

  3.04 - [Timesheet Service - Timedata - getById](http://localhost:8600/api/timedatas/1) -- single <br>
  3.05 - [Timesheet Service - Timedata - getAll](http://localhost:8600/api/timedatas/search/findTimedataById?id=1) -- paged, 1st 20 <br>

  3.06 - [Timesheet Service - Timedata - findByUserId](http://localhost:8600/api/timedatas/search/findByUserId?id=1) -- paged, 1st 20 <br>
  3.07 - [Timesheet Service - Timedata - findByUserId](http://localhost:8600/api/timedatas/search/findByUserId?id=1&page=0&size=30) -- paged, 1st 30 <br>
  3.08 - [Timesheet Service - Timedata - findByUserId](http://localhost:8600/api/timedatas/search/findByUserId?id=1&page=1&size=30) -- paged, 2nd 30 <br>

  3.09 - [Timesheet Service - Timedata - findByDate](http://localhost:8600/api/timedatas/search/findByDate?date=2020-09-01) -- paged, 1 day of All users <br>
  3.10 - [Timesheet Service - Timedata - findByUserIdAndDate](http://localhost:8600/api/timedatas/search/findByUserIdAndDate?id=1&date=2020-09-01) -- 1 day of 1 user <br>
  3.11 - [Timesheet Service - Timedata - findByUserIdAndYearMonth](http://localhost:8600/api/timedatas/search/findByUserIdAndYearMonth?id=2&year=2020&month=09) -- 1 month of 1 user <br>
  3.12 - [Timesheet Service - Timedata - findByYearMonth](http://localhost:8600/api/timedatas/search/findByYearMonth?year=2020&month=09) -- 1 month of All users <br>

  4.01 - [Timesheet Service - Relational - Timedatas from User](http://localhost:8600/api/users/2/timedata) -- all Timedata records by User ID <br>
  4.02 - [Timesheet Service - Relational - User from timedata](http://localhost:8600/api/timedatas/31/user) -- single User record/info by Timedata ID <br>
  <br>

- backend REST-API response examples ("service-timesheet"): <br>
  1.01 - [Timesheet Service - Orgdata - getAll](https://github.com/drvicx/jdm-timesheet-client-angular-udm/tree/main/_preview/rest-backend-repsonse-example_orgdatas_20211203_1150.json) <br>
  2.01 - [Timesheet Service - User - getAll](https://github.com/drvicx/jdm-timesheet-client-angular-udm/tree/main/_preview/rest-backend-repsonse-example_users_20211203_1150.json) <br>
  3.01 - [Timesheet Service - Timedata - getAll](https://github.com/drvicx/jdm-timesheet-client-angular-udm/tree/main/_preview/rest-backend-repsonse-example_timedatas_20211203_1150.json) <br>
  4.01 - [Timesheet Service - Relational - Timedatas from User](https://github.com/drvicx/jdm-timesheet-client-angular-udm/tree/main/_preview/rest-backend-repsonse-example_cross_timedata-users_20211203_1150.json) <br>
  4.02 - [Timesheet Service - Relational - User from timedata](rest-backend-repsonse-example_cross_users-timedata_20211203_1150.json) <br>

<br>

## =APP-PREVIEW

- 1.01. Orgdata, User, Timedata Angular Components output

![preview](_preview/angular-app-preview_20211204_2050.png?raw=true)

<br><br>
<hr>

## =ANGULAR CLI
## 1. Development server
Run `ng serve` or `ng serve --open` to start a dev server.<br>
Wait till browser page opens or navigate to http://localhost:4200 <br>
The app will automatically reload if you change any of the source files.

## 2. Code scaffolding
Run `ng generate component component-name` to generate a new component. <br>
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 3. Build
Run `ng build` to build the project. <br>
The build artifacts will be stored in the `dist/` directory.

## 4. Further help
To get more help on the Angular CLI use `ng help` <br>
or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
